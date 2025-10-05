import { Experience } from "@/helpers/experience";
import { Card } from "./Card";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <Card tags={experience.tags}>
      <div className="flex justify-between mb-1 items-center">
        <h3 className="text-2xl font-bold text-orange-400">{experience.title}</h3>
        <p className="text-gray-300 text-sm">{experience.date}</p>
      </div>
      <p className="text-gray-300 text-lg mb-4 font-medium">
        <span className=" text-orange-400">{experience.company}</span> - {experience.place}
      </p>
      <p className="text-gray-100 mb-4">{experience.description}</p>
      
    </Card>
  );
};
