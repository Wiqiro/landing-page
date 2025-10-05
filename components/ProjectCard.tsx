import { Github } from "react-bootstrap-icons";
import { Card } from "./Card";

const iconStyle =
  "text-orange transition duration-300 ease-in-out hover:scale-105 hover:text-orange-300";

export const ProjectCard = ({
  title,
  description,
  link,
  tags,
}: {
  title: string;
  description: string;
  link: string;
  tags: string[];
}) => {
  return (
    <Card tags={tags}>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-orange-400 mb-4">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100"
        >
          <Github size={32} className={iconStyle} />
        </a>
      </div>
      <p className="text-gray-100 mb-4">{description}</p>
    </Card>
  );
};
