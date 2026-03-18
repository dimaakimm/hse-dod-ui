import { EventPage } from "@/screens/EventPage";
import { getTranslations } from "next-intl/server";
import { IFilter } from "@/entities/filters";

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ filter: IFilter; id: string }>;
}) {
  const { filter, id } = await params;

  return <EventPage id={id} filter={filter} />;
}
