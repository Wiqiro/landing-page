"use client";
import { useI18n } from "@/components/I18nProvider";

export const BottomSection = () => {
  const { t } = useI18n();
  return (
    <div className="text-center text-gray-400 text-sm">
      <p className="mb-1">{t("bottom.copyright")}</p>
      <p>{t("bottom.build")}</p>
    </div>
  );
};
