"use client";

import { Github } from "react-bootstrap-icons";
import { ProjectCard } from "../ProjectCard";
import dynamic from "next/dynamic";
import { useI18n } from "@/components/I18nProvider";
import { useEffect, useState } from "react";

const AnimatedNumber = dynamic(() => import("../AnimatedNumber"));

export const ProjectsSection = () => {
  const { t } = useI18n();
  const [publicRepos, setPublicRepos] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);
  const academicProjects = 13;

  useEffect(() => {
    const fetchContributionsData = async () => {
      try {
        const response = await fetch(
          "https://github-contributions-api.jogruber.de/v4/Wiqiro"
        );
        const data = await response.json();
        const yearTotals = (Object.values(data?.total) as number[]) || [];
        setTotalContributions(yearTotals.reduce((a, b) => a + b, 0));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchReposData = async () => {
      try {
        fetch("https://api.github.com/users/Wiqiro")
          .then((res) => res.json())
          .then((data) => {
            setPublicRepos(data.public_repos || 0);
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchContributionsData();
    fetchReposData();
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-4xl text-orange-400 font-bold mb-12 text-center">
        {t("projects.title")}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-evenly space-y-12 mb-12 md:mb-0 md:items-baseline">
        <AnimatedNumber
          end={publicRepos}
          duration={3000}
          label={t("projects.repos")}
        />
        <AnimatedNumber
          end={totalContributions}
          duration={3000}
          label={t("projects.contributions")}
        />
        <AnimatedNumber
          end={academicProjects}
          duration={3000}
          label={t("projects.academic")}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProjectCard
          title={t("projects.sample_title_1")}
          description={t("projects.sample_desc_1")}
          link="#"
          tags={["Tag1", "Tag2"]}
        />
        <ProjectCard
          title={t("projects.sample_title_2")}
          description={t("projects.sample_desc_2")}
          link="#"
          tags={["Tag3", "Tag4"]}
        />
        <ProjectCard
          title={t("projects.sample_title_3")}
          description={t("projects.sample_desc_3")}
          link="#"
          tags={["Tag3", "Tag4"]}
        />

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="text-orange-400 text-2xl font-bold">
            {t("projects.more")}
          </div>
          <a
            className="text-white  flex items-center space-x-2 transition duration-300 hover:scale-105 hover:text-orange-300"
            href="https://github.com/Wiqiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            <p className="text-center underline underline-offset-2">{t("projects.more_cta")}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
