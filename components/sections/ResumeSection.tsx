"use client";
import { Braces, Globe2 } from "react-bootstrap-icons";
import { ExperienceCard } from "../ExperienceCard";
import { SkillCard } from "../SkillCard";
import { useI18n } from "@/components/I18nProvider";

export const ResumeSection = () => {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-4xl text-orange-400 font-bold mb-8 text-center">{t("resume.title")}</h2>
      <h3 className="text-3xl font-bold mb-4 text-center">{t("resume.experience")}</h3>
      <div className="relative mb-8">
        <div className="group flex flex-col gap-8">
          <div className="relative pl-20">
            <div className="absolute left-[27px] top-13 -bottom-15 w-[2px] bg-white/10" />
            <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-orange-300/50 blur-xs " />
            <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-[#242935]/90 border-[3px] border-[#202530] " />

            <ExperienceCard
              title="Développeur Full-Stack"
              company="Entreprise XYZ"
              place="Paris, France"
              date="2023 - Présent"
              description="Développement et maintenance d'applications web en utilisant React, Node.js et MongoDB. Collaboration avec les équipes de conception et de produit pour créer des solutions innovantes."
              tags={["React", "Node.js", "MongoDB"]}
            />
          </div>

          <div className="relative pl-20">
            <div className="absolute left-[27px] top-13 -bottom-15 group-last:bottom-10 w-[2px] bg-white/10" />
            <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-orange-300/50 blur-xs " />
            <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-[#242935]/90 border-[3px] border-[#202530] " />

            <ExperienceCard
              title="Stagiaire Développeur"
              company="Startup ABC"
              place="Lyon, France"
              date="2022 - 2023"
              description="Participation au développement d'une application mobile en utilisant React Native. Contribution à l'optimisation des performances et à l'amélioration de l'expérience utilisateur."
              tags={["React Native", "JavaScript", "UI/UX"]}
            />
          </div>
        </div>
      </div>

  <h3 className="text-3xl font-bold mb-4 text-center">{t("resume.education")}</h3>

      <div className="relative mb-8">
        <div className="group flex flex-col gap-8">
          <div className="relative pl-20">
            <div className="absolute left-[27px] top-13 -bottom-15 w-[2px] bg-white/10" />
            <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-orange-300/50 blur-xs " />
            <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-[#242935]/90 border-[3px] border-[#202530] " />

            <ExperienceCard
              title="Développeur Full-Stack"
              company="Entreprise XYZ"
              place="Paris, France"
              date="2023 - Présent"
              description="Développement et maintenance d'applications web en utilisant React, Node.js et MongoDB. Collaboration avec les équipes de conception et de produit pour créer des solutions innovantes."
              tags={["React", "Node.js", "MongoDB"]}
            />
          </div>

          <div className="relative pl-20">
            <div className="absolute left-[27px] top-13 -bottom-15 group-last:bottom-10 w-[2px] bg-white/10" />
            <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-orange-300/50 blur-xs " />
            <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-[#242935]/90 border-[3px] border-[#202530] " />

            <ExperienceCard
              title="Stagiaire Développeur"
              company="Startup ABC"
              place="Lyon, France"
              date="2022 - 2023"
              description="Participation au développement d'une application mobile en utilisant React Native. Contribution à l'optimisation des performances et à l'amélioration de l'expérience utilisateur."
              tags={["React Native", "JavaScript", "UI/UX"]}
            />
          </div>
        </div>
      </div>

  <h3 className="text-3xl font-bold mb-4 text-center">{t("resume.skills")}</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
