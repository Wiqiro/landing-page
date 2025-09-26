"use client";
import React from "react";
import { EnvelopeFill, GeoAltFill, Github, Linkedin, Strava, TelephoneFill } from "react-bootstrap-icons";
import { Card } from "../Card";
import { useI18n } from "@/components/I18nProvider";

const iconStyle =
  "text-white transition duration-300 transform origin-center hover:scale-105 hover:text-orange-300 inline-flex items-center gap-4 text-md underline underline-offset-2 h-8";

export const ContactSection = () => {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-8">
      <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center">{t("contact.title")}</h2>
      <p className="text-lg text-white mb-8 text-center">{t("contact.lead")}</p>
      <div className="flex gap-8 justify-center items-stretch w-full px-4 ">
        <div className="w-full md:w-10/12 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Card hoverEffect={false}>
              <h3 className="text-3xl font-bold mt-4 mb-6 text-center text-orange-400">{t("contact.coords")}</h3>
              <div className="p-4 w-full h-full flex flex-col justify-center gap-6 text-lg items-start">
                <a href="mailto:williamnoimbert@gmail.com" target="_blank" rel="noopener noreferrer" className={iconStyle}>
                  <EnvelopeFill size={28} />
                  williamnoimbert@gmail.com
                </a>
                <a href="tel:+33767147379" target="_blank" rel="noopener noreferrer" className={iconStyle}>
                  <TelephoneFill size={28} />
                  +33 7 67 14 73 79
                </a>
                <div className="text-white flex items-center gap-4 h-8">
                  <GeoAltFill size={28} />
                  Belfort, France
                </div>
              </div>
            </Card>
          </div>

          <div className="w-full md:w-1/2">
            <Card hoverEffect={false}>
              <h3 className="text-3xl font-bold mt-4 mb-6 text-center text-orange-400">{t("contact.follow")}</h3>
              <div className="p-4 w-full h-full flex flex-col justify-center gap-6 text-lg items-start">
                <a href="https://linkedin.com/in/wimbert" target="_blank" rel="noopener noreferrer" className={iconStyle}>
                  <Linkedin size={28} />
                  William Imbert
                </a>
                <a href="https://github.com/Wiqiro" target="_blank" rel="noopener noreferrer" className={iconStyle}>
                  <Github size={28} />
                  Wiqiro
                </a>
                <a href="mailto:williamnoimbert@gmail.com" target="_blank" rel="noopener noreferrer" className={iconStyle}>
                  <Strava size={28} />
                  William Imbert
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
