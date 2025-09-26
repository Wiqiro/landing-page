"use client";

import {
  computeActiveSectionWithNavOffset,
  scrollToSectionWithNavOffset,
} from "@/helpers/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";

const sectionStyle =
  "hover:underline cursor-pointer underline-offset-6 transition duration-300 hover:scale-105 hover:text-orange-300";

export const Navbar = () => {
  const { t, locale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navHeight = 56;

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 0);
      setActiveSection(computeActiveSectionWithNavOffset(navHeight));
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update(); // initial
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      className={`w-full p-4 absolute top-0 transition-all duration-500 ease-in-out border-b ${
        scrolled
          ? "backdrop-blur-[2px] bg-navbar border-white/10 shadow-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between mx-4 ">
        <h1
          className="font-bold cursor-pointer hover:text-orange-300 transition duration-300 hover:scale-105"
          onClick={() => {
            scrollToSectionWithNavOffset("home", navHeight);
          }}
        >
          {"<"}
          <span className=" text-orange-400 transition ">William Imbert</span>
          {" />"}
        </h1>

        <div className="hidden md:flex items-center space-x-8 ">
          <ul className="flex space-x-8">
            <li
              className={`${sectionStyle} ${
                activeSection === "home"
                  ? "text-orange-400 hover:text-orange-400 font-semibold underline"
                  : ""
              }`}
              onClick={() => {
                scrollToSectionWithNavOffset("home", navHeight);
              }}
            >
              {t("nav.home")}
            </li>
            <li
              className={`${sectionStyle}  ${
                activeSection === "about"
                  ? "text-orange-400 hover:text-orange-400 font-semibold underline"
                  : ""
              }`}
              onClick={() => {
                scrollToSectionWithNavOffset("about", navHeight);
              }}
            >
              {t("nav.about")}
            </li>
            <li
              className={`${sectionStyle}  ${
                activeSection === "projects"
                  ? "text-orange-400 hover:text-orange-400 font-semibold underline"
                  : ""
              }`}
              onClick={() => {
                scrollToSectionWithNavOffset("projects", navHeight);
              }}
            >
              {t("nav.projects")}
            </li>
            <li
              className={`${sectionStyle}  ${
                activeSection === "resume"
                  ? "text-orange-400 hover:text-orange-400 font-semibold underline"
                  : ""
              }`}
              onClick={() => {
                scrollToSectionWithNavOffset("resume", navHeight);
              }}
            >
              {t("nav.resume")}
            </li>
            <li
              className={`${sectionStyle}  ${
                activeSection === "contact"
                  ? "text-orange-400 hover:text-orange-400 font-semibold underline"
                  : ""
              }`}
              onClick={() => {
                scrollToSectionWithNavOffset("contact", navHeight);
              }}
            >
              {t("nav.contact")}
            </li>
          </ul>
        </div>
        <ul className="flex space-x-4">
          <Link
            className={`${sectionStyle}  ${
              locale === "fr"
                ? "text-orange-400 hover:text-orange-400 font-semibold underline"
                : ""
            }`}
            href="/fr"
          >
            FR
          </Link>
          <Link
            className={`${sectionStyle}  ${
              locale === "en"
                ? "text-orange-400 hover:text-orange-400 font-semibold underline"
                : ""
            }`}
            href="/en"
          >
            EN
          </Link>
        </ul>
      </div>
    </nav>
  );
};
