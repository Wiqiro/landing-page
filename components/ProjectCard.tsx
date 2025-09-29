import { Github } from "react-bootstrap-icons";
import { Card } from "./Card";

const iconStyle =
  "text-orange-400 transition duration-300 ease-in-out hover:scale-105 text-white/90 hover:text-orange-300";

export const ProjectCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
  link: string;
  tags: string[];
}) => {
  return (
    <Card>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-orange-400 mb-4">{title}</h3>
        <a
          href="https://github.com/Wiqiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={32} className={iconStyle} />
        </a>
      </div>
      <p className="text-white mb-4">{description}</p>
    </Card>
  );
};
