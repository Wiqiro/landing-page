import { ExperienceCard } from "../ExperienceCard";

export const ResumeSection = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="text-4xl text-orange-400 font-bold mb-8 text-center">
        Mon CV
      </h2>
      <h3 className="text-3xl font-bold mb-4 text-center">Expérience</h3>
      <div className="flex flex-col gap-8 mb-8">
        <div>
            
          <ExperienceCard
            title="Développeur Full-Stack"
            company="Entreprise XYZ"
            place="Paris, France"
            date="2023 - Présent"
            description="Développement et maintenance d'applications web en utilisant React, Node.js et MongoDB. Collaboration avec les équipes de conception et de produit pour créer des solutions innovantes."
            tags={["React", "Node.js", "MongoDB"]}
          />
        </div>
        <div>
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
      <p className="text-white mb-4">
        Vous pouvez télécharger mon CV en cliquant sur le lien ci-dessous :
      </p>
    </div>
  );
};
