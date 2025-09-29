"use client";
import { Experience } from "@/helpers/experience";
import React from "react";
import { ExperienceCard } from "./ExperienceCard";

export const TimelineGroup = ({
  experiences,
}: {
  experiences: Experience[];
}) => {
  return (
    <div className="relative mb-8">
      <div className="group flex flex-col gap-8">
        {experiences.map((e, i) => {
          const lineClass = `absolute left-[27px] top-13 -bottom-15 ${
            i === experiences.length - 1 ? "group-last:bottom-10 " : ""
          }w-[2px] bg-white/10`;
          return (
            <div className="relative md:pl-20" key={i}>
              <div className="hidden md:block">
                <div className={lineClass} />
                <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-orange-300/50 blur-xs " />
                <div className="absolute left-4 top-7 w-6 h-6 rounded-full bg-[#242935]/90 border-[3px] border-[#202530] " />
              </div>

              <ExperienceCard experience={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
