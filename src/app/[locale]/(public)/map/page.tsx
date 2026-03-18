import { getTranslations } from "next-intl/server";
import { MapPage } from "@/screens/MapPage";

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t("metadata.title.map"),
    description: t("metadata.description"),
  };
}

export default async function Map() {
  return <MapPage />;
}
