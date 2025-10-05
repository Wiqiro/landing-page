import { ReactNode } from "react";
import { CustomTag } from "./CustomTag";

export const Card = ({
  children,
  tags = [],
  hoverEffect = true,
}: {
  children: ReactNode;
  tags?: string[];
  hoverEffect?: boolean;
}) => {
  return (
    <div
      className={`backdrop-blur-[2px] bg-cards border  p-6 rounded-lg ${
        hoverEffect ? "border-white/10 hover:border-orange-300" : "border-orange-300"
      } transition duration-300 shadow-sm`}
    >
      {children}
      <div className="mt-2 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <CustomTag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
};
