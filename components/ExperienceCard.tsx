import { Github } from "react-bootstrap-icons";
import { Card } from "./Card";


export const ExperienceCard = ({
  title,
  description,
  company,
  place,
  date,
  tags
}: {
  title: string;
  description: string;
  company: string;
  place: string;
  date: string;
  tags: string[];
}) => {
  return (
    <Card>
      <div className="flex justify-between mb-1 items-center">
        <h3 className="text-2xl font-bold text-orange-400">{title}</h3>
        <p className="text-gray-200 text-sm">{date}</p>
      </div>
      <p className="text-gray-200 text-lg mb-4 font-medium">
        <span className=" text-orange-400">{company}</span> - {place}
      </p>
      <p className="text-white mb-4">{description}</p>
    </Card>
  );
};
