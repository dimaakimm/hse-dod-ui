import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { AudienceArray } from "@/entities/audience";
import { EventsListPage } from "@/screens/EventsListPage";
import { LocationsArray } from "@/entities/location";
import { IFilter } from "@/entities/filters";

export default async function EventsAudiencePage({
  params,
}: {
  params: Promise<{ filter: IFilter }>;
}) {
  const { filter } = await params;

  if (![...LocationsArray, ...AudienceArray].includes(filter)) {
    notFound();
  }

  return <EventsListPage filter={filter} />;
}
