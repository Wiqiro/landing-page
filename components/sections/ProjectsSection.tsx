import React from "react";
import { Github } from "react-bootstrap-icons";
import { ProjectCard } from "../ProjectCard";
import useCountUp from "../../hooks/useCountUp";

export const ProjectsSection = () => {
  const depots = useCountUp(24, 3000);
  const contributions = useCountUp(1592, 3000);
  const acad = useCountUp(13, 3000);

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-4xl text-orange-400 font-bold mb-12 text-center">Projets</h2>
      <div className="flex flex-col md:flex-row items-center justify-evenly space-y-12 mb-12 md:mb-0 md:items-baseline">
        <div className="flex flex-col items-center w-50 space-y-2">
          <p className="text-orange-400 font-bold text-5xl">{depots}</p>
          <p>Dépôts publics</p>
        </div>
        <div className="flex flex-col items-center w-50 space-y-2">
          <p className="text-orange-400 font-bold text-5xl">{contributions}</p>
          <p>Contributions</p>
        </div>
        <div className="flex flex-col items-center w-50 space-y-2">
          <p className="text-orange-400 font-bold text-5xl">{acad}</p>
          <p>Projets académiques</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ProjectCard
          title="Projet 1"
          description="Description du projet 1"
          link="#"
          tags={["Tag1", "Tag2"]}
        />
        <ProjectCard
          title="Projet 2"
          description="Description du projet 2"
          link="#"
          tags={["Tag3", "Tag4"]}
        />
        <ProjectCard
          title="Projet 2"
          description="Description du projet 2"
          link="#"
          tags={["Tag3", "Tag4"]}
        />

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="text-orange-400 text-2xl font-bold">Et bien plus...</div>
          <a
            className="text-white text-md underline underline-offset-2 flex items-center space-x-2 transition duration-300 hover:scale-105 hover:text-orange-300"
            href="https://github.com/Wiqiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            <p>Consultez mon GitHub pour plus de projets !</p>
          </a>
        </div>
      </div>
    </div>
  );
};
