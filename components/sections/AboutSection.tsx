"use client";
import { useI18n } from "@/components/I18nProvider";

export const AboutSection = () => {
  const { t } = useI18n();
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-orange-400 font-bold mb-8 text-center">{t("about.title")}</h2>
      <div className="mb-8 flex flex-col justify-center space-y-16 max-w-4xl mx-auto">
        <p className="text-white text-lg text-center">{t("about.lead")}</p>
        <p className="text-white text-lg text-center">{t("about.lead2")}</p>
        <p className="text-white text-lg text-center">{t("about.lead3")}</p>
      </div>
    </div>
  );
};
