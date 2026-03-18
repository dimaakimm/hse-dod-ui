import { getTranslations } from "next-intl/server";
import { PropsWithChildren } from "react";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("metadata.title.events"),
    description: t("metadata.description"),
  };
}

export default async function Layout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
