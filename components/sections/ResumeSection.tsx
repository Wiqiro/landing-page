"use client";
import { Braces, Globe2, Infinity } from "react-bootstrap-icons";
import { SkillCard } from "../SkillCard";
import { useI18n } from "@/components/I18nProvider";
import { TimelineGroup } from "../TimelineGroup";
import { Experience } from "@/helpers/experience";

export const ResumeSection = () => {
  const { t } = useI18n();

  const experiences: Experience[] = [
    {
      title: t("resume.experience.givemefive.title"),
      company: t("resume.experience.givemefive.company"),
      place: t("resume.experience.givemefive.place"),
      date: t("resume.experience.givemefive.date"),
      description: t("resume.experience.givemefive.description"),
      tags: [
        "SCRUM",
        "React",
        "Node.js",
        "Apollo GraphQL",
        "Prisma ORM",
        "Jest",
        "Cucumber",
      ],
    },
  ];

  const education: Experience[] = [
    {
      title: t("resume.education.utbm_engineer.title"),
      company: t("resume.education.utbm_engineer.company"),
      place: t("resume.education.utbm_engineer.place"),
      date: t("resume.education.utbm_engineer.date"),
      description: t("resume.education.utbm_engineer.description"),
      tags: [
        "Conception",
        "Architecture",
        "Java EE",
        "Docker",
        "Kubernetes",
        "Réseaux LAN",
        "GCP",
      ],
    },
    {
      title: t("resume.education.primorska.title"),
      company: t("resume.education.primorska.company"),
      place: t("resume.education.primorska.place"),
      date: t("resume.education.primorska.date"),
      description: t("resume.education.primorska.description"),
      tags: ["Unity", "R", "OpenGL"],
    },
    {
      title: t("resume.education.utbm_prep.title"),
      company: t("resume.education.utbm_prep.company"),
      place: t("resume.education.utbm_prep.place"),
      date: t("resume.education.utbm_prep.date"),
      description: t("resume.education.utbm_prep.description"),
      tags: [
        t("resume.education.utbm_prep.tags.math"),
        t("resume.education.utbm_prep.tags.mechanics"),
        t("resume.education.utbm_prep.tags.algorithms"),
        "C",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-4xl text-orange-400 font-bold mb-8 text-center">
        {t("resume.title")}
      </h2>
      <h3 className="text-3xl font-bold mb-4 text-center">
        {t("resume.experienceTitle")}
      </h3>
      <TimelineGroup experiences={experiences} />

      <h3 className="text-3xl font-bold mb-4 text-center">
        {t("resume.educationTitle")}
      </h3>

      <TimelineGroup experiences={education} />

      <h3 className="text-3xl font-bold mb-4 text-center">
        {t("resume.skillsTitle")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SkillCard
          title={t("resume.skills.web.title")}
          skills={t("resume.skills.web.skills")}
          icon={<Globe2 size={40} />}
        />
        <SkillCard
          title={t("resume.skills.programming.title")}
          skills={t("resume.skills.programming.skills")}
          icon={<Braces size={40} />}
        />
        <SkillCard
          title={t("resume.skills.devops.title")}
          skills={t("resume.skills.devops.skills")}
          icon={<Infinity size={40} />}
        />
      </div>
    </div>
  );
};
