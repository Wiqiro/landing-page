import { Card } from "./Card";

export const SkillCard = ({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: string;
  icon?: React.ReactNode;
}) => {
  return (
    <Card>
      <div className="flex text-orange-400 mb-6 mx-auto justify-around">{icon}</div>
      <h3 className="text-xl text-center font-bold mb-4 text-orange-400">
        {title}
      </h3>
      <p className="text-gray-300 text-center">{skills}</p>
    </Card>
  );
};
