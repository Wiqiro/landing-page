"use client";
import { Braces, Globe2 } from "react-bootstrap-icons";
import { SkillCard } from "../SkillCard";
import { useI18n } from "@/components/I18nProvider";
import { TimelineGroup } from "../TimelineGroup";
import { Experience } from "@/helpers/experience";

export const ResumeSection = () => {
  const { t } = useI18n();

  const experiences: Experience[] = [
    {
      title: "Développeur Full-Stack",
      company: "Entreprise XYZ",
      place: "Paris, France",
      date: "2023 - Présent",
      description:
        "Développement et maintenance d'applications web en utilisant React, Node.js et MongoDB. Collaboration avec les équipes de conception et de produit pour créer des solutions innovantes.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Stagiaire Développeur",
      company: "Startup ABC",
      place: "Lyon, France",
      date: "2022 - 2023",
      description:
        "Participation au développement d'une application mobile en utilisant React Native. Contribution à l'optimisation des performances et à l'amélioration de l'expérience utilisateur.",
      tags: ["React Native", "JavaScript", "UI/UX"],
    },
  ];

  const education: Experience[] = [
    {
      title: "Master en Informatique",
      company: "Université de Technologie",
      place: "Lille, France",
      date: "2020 - 2022",
      description:
        "Spécialisation en développement web et mobile. Projets académiques axés sur la création d'applications performantes et évolutives.",
      tags: ["Java", "Python", "Bases de données"],
    },
    {
      title: "Licence en Informatique",
      company: "Université de Sciences",
      place: "Marseille, France",
      date: "2017 - 2020",
      description:
        "Formation générale en informatique avec une introduction aux concepts de programmation, structures de données et algorithmes.",
      tags: ["C", "C++", "Algorithmique"],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-4xl text-orange-400 font-bold mb-8 text-center">
        {t("resume.title")}
      </h2>
      <h3 className="text-3xl font-bold mb-4 text-center">
        {t("resume.experience")}
      </h3>
      <TimelineGroup experiences={experiences} />

      <h3 className="text-3xl font-bold mb-4 text-center">
        {t("resume.education")}
      </h3>

      <TimelineGroup experiences={education} />

      <h3 className="text-3xl font-bold mb-4 text-center">
        {t("resume.skills")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SkillCard
          title="Frameworks et technologies web"
          skills="React, Node.js, MongoDB"
          icon={<Globe2 size={40} />}
        />
        <SkillCard
          title="Langages de programmation"
          skills="JavaScript, TypeScript, Python, Java"
          icon={<Braces size={40} />}
        />
        <SkillCard
          title="Outils DevOps"
          skills="Docker, Kubernetes, Jenkins"
          icon={<Globe2 size={40} />}
        />
      </div>
    </div>
  );
};
