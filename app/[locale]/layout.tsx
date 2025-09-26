import type { ReactNode } from "react";
import { Locale, locales } from "@/helpers/locales";
import { loadTranslations } from "@/helpers/loadTranslations";
import { I18nProvider } from "@/components/I18nProvider";
import { JetBrains_Mono } from "next/font/google";

import "../globals.css";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const dynamic = "error";

export const generateStaticParams = () => locales.map((l) => ({ locale: l }));

const RootLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  const locale = (await params).locale as Locale;
  const messages = await loadTranslations(locale);
  return (
    <html lang={locale}>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <I18nProvider locale={locale} messages={messages}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
};

export default RootLayout;
