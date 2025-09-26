import type { ReactNode } from "react";
import { locales } from "@/helpers/i18n";
import { loadMessages, type Messages } from "@/helpers/i18n";
import { I18nProvider } from "@/components/I18nProvider";
import { JetBrains_Mono } from "next/font/google";

import "../globals.css";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const dynamic = "error";

export function generateStaticParams() {
  return locales.map((l) => ({ locale: l }));
}

export default async function RootLayout(props: unknown) {
  const { children, params } = props as { children: ReactNode; params: Promise<{ locale: string }> };
  const { locale } = await params;
  const messages: Messages = await loadMessages(locale);
    return (
      <html lang={locale}>
        <body className={`${jetBrainsMono.className} antialiased`}>
          <I18nProvider locale={locale} messages={messages}>
            {children}
          </I18nProvider>
        </body>
      </html>
    );
}
