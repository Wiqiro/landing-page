import { Experience } from "@/helpers/experience";
import { Card } from "./Card";
import { CustomTag } from "./CustomTag";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <Card>
      <div className="flex justify-between mb-1 items-center">
        <h3 className="text-2xl font-bold text-orange-400">{experience.title}</h3>
        <p className="text-gray-300 text-sm">{experience.date}</p>
      </div>
      <p className="text-gray-300 text-lg mb-4 font-medium">
        <span className=" text-orange-400">{experience.company}</span> - {experience.place}
      </p>
      <p className="text-gray-100 mb-4">{experience.description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <CustomTag key={tag} label={tag} />
        ))}
      </div>
    </Card>
  );
};
