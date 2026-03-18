import { getTranslations } from "next-intl/server";

import { HomePage } from "@/screens/HomePage";

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t("metadata.title.home"),
    description: t("metadata.description"),
  };
}

export default async function Home() {
  return <HomePage />;
}
