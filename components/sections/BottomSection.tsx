"use client";
import { useI18n } from "@/components/I18nProvider";

export const BottomSection = () => {
  const { t } = useI18n();
  return (
    <div className="text-center text-gray-400 text-sm space-y-1">
      <p>
        © 2025 William Imbert -{" "}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          CC BY-SA 4.0
        </a>
      </p>
      <p>{t("bottom.source")}
        <a
          href="https://github.com/Wiqiro/landing-page"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};
