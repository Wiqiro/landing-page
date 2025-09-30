"use client"

import { scrollToSectionWithNavOffset } from "@/helpers/navigation";
import { CaretDownFill, EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";
import { useI18n } from "@/components/I18nProvider";

const iconStyle =
  "text-gray-100 transition duration-300 hover:scale-105 hover:text-orange-300";

export const HomeSection = () => {
  const { t } = useI18n();
  return (
    <div className="absolute top-1/3 left-0 right-0 w-full text-center h-2/3">
      <h1 className="text-4xl sm:text-6xl md:text-7xl text-orange-400 font-bold mb-8">{t("hero.title")}</h1>
      <div className="text-xl md:text-3xl text-gray-100 mb-32 h-[2.5rem]">
        <Typewriter
          options={{
            strings: [
              t("hero.lines.0"),
              t("hero.lines.1"),  
              t("hero.lines.2"),
              t("hero.lines.3"),
              t("hero.lines.5"),
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 25,
          }}
        />
      </div>
      <div className="flex justify-center space-x-16">
        <a href="https://linkedin.com/in/wimbert" target="_blank" rel="noopener noreferrer">
          <Linkedin size={44} className={iconStyle} />
        </a>
        <a href="https://github.com/Wiqiro" target="_blank" rel="noopener noreferrer">
          <Github size={44} className={iconStyle} />
        </a>
        <a href="mailto:williamnoimbert@gmail.com" target="_blank" rel="noopener noreferrer">
          <EnvelopeFill size={44} className={iconStyle} />
        </a>
      </div>
      <div className="absolute w-full bottom-12 ">
        <CaretDownFill
          size={32}
          className={`${iconStyle} animate-bounce mt-16 mx-auto cursor-pointer`}
          onClick={() => {
            scrollToSectionWithNavOffset("about", 56);
          }}
        />
      </div>
    </div>
  );
};
