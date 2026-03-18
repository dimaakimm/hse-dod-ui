import { PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import dotenv from "dotenv";

import { LanguageType } from "@/entities/locale";

import { WithProviders } from "../(providers)";
import GlobalStyle from "../(theme)/GlobalStyle";
import { Header } from "@/widgets/Header";
import localFont from "next/font/local";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const hseSans = localFont({
  src: [
    {
      path: "../../shared/assets/fonts/HSESans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../shared/assets/fonts/HSESans-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../shared/assets/fonts/HSESans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hse-sans",
  display: "swap",
});

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("metadata.title.home"),
    description: t("metadata.description"),
    robots: {
      index: true,
      notranslate: true,
    },
    icons: {
      icon: [
        {
          url: "/favicon-light.ico",
          href: "/favicon-light.ico",
        },
      ],
    },
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale: LanguageType = "ru";
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head></head>
      <body className={`${hseSans.variable} font-sans`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <GlobalStyle />
          <WithProviders>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Header />
              {children}
            </div>
          </WithProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
