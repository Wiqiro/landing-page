import { ReactNode } from "react";

export const Card = ({
  children,
  hoverEffect = true,
}: {
  children: ReactNode;
  hoverEffect?: boolean;
}) => {
  return (
    <div
      className={`backdrop-blur-[2px] bg-cards border  p-6 rounded-lg ${
        hoverEffect ? "border-white/10 hover:border-orange-300" : "border-orange-300"
      } transition duration-300 shadow-sm`}
    >
      {children}
    </div>
  );
};
