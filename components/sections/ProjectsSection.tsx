import { Github } from "react-bootstrap-icons";
import { ProjectCard } from "../ProjectCard";

export const ProjectsSection = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-4xl text-orange-400 font-bold mb-8 text-center">
        Projects
      </h2>
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
          <div className="text-orange-400 text-2xl font-bold">
            Et bien plus...
          </div>
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
