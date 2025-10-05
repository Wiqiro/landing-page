"use client";
import React, { ReactNode } from "react";
import {
  EnvelopeFill,
  GeoAltFill,
  Github,
  Linkedin,
  Strava,
  TelephoneFill,
} from "react-bootstrap-icons";
import { Card } from "../Card";
import { useI18n } from "@/components/I18nProvider";

const iconStyle =
  "text-gray-100 transition duration-300 transform origin-center hover:scale-105 hover:text-orange-300 inline-flex items-center gap-4 underline underline-offset-2 h-8";

type IconLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const IconLink = ({ href, children, className }: IconLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className ?? iconStyle}
  >
    {children}
  </a>
);

export const ContactSection = () => {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-6xl flex flex-col items-center gap-8">
      <h2 className="text-4xl font-bold text-orange-400 mb-8">
        {t("contact.title")}
      </h2>
      <p className="text-lg text-gray-100 mb-8 text-center">{t("contact.lead")}</p>
      <div className="w-full lg:w-5/6 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full sm:w-3/4 md:w-3/5 lg:w-1/2">
          <Card>
            <h3 className="text-3xl font-bold mt-4 mb-6 text-center text-orange-400">
              {t("contact.coords")}
            </h3>
            <div className="sm:p-4 w-full h-full flex flex-col justify-center gap-6 text-base sm:text-lg items-start">
              <IconLink
                href="mailto:williamnoimbert@gmail.com"
                className={iconStyle}
              >
                <EnvelopeFill size={28} />
                <span className="overflow-hidden">williamnoimbert@gmail.com</span>
              </IconLink>
              <IconLink href="tel:+33767147379" className={iconStyle}>
                <TelephoneFill size={28} />
                +33 7 67 14 73 79
              </IconLink>
              <div className="text-gray-100 flex items-center gap-4 h-8">
                <GeoAltFill size={28} />
                Belfort, France
              </div>
            </div>
          </Card>
        </div>

        <div className="w-full sm:w-3/4 md:w-3/5 lg:w-1/2">
          <Card>
            <h3 className="text-3xl font-bold mt-4 mb-6 text-center text-orange-400">
              {t("contact.follow")}
            </h3>
            <div className="sm:p-4 w-full h-full flex flex-col justify-center gap-6 text-base sm:text-lg items-start">
              <IconLink
                href="https://linkedin.com/in/wimbert"
                className={iconStyle}
              >
                <Linkedin size={28} />
                William Imbert
              </IconLink>
              <IconLink href="https://github.com/Wiqiro" className={iconStyle}>
                <Github size={28} />
                Wiqiro
              </IconLink>
              <IconLink
                href="https://www.strava.com/athletes/87344895"
                className={iconStyle}
              >
                <Strava size={28} />
                William Imbert
              </IconLink>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
