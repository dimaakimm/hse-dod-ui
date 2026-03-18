import { FC } from "react";
import {
  SEventInfo,
  SEventPage,
  SEventTitle,
  STitle,
} from "./eventPage.styles";
import { EventPageProps } from "../model/eventPage.types";
import { useGetEventsListTitle } from "@/entities/event";

export const EventPage: FC<EventPageProps> = ({ id, filter }) => {
  const title = useGetEventsListTitle(filter);

  return (
    <SEventPage>
      <STitle>{title}</STitle>
      <SEventInfo>
        <SEventTitle>10:15-11:00</SEventTitle>
        <div>Название</div>
        <SEventTitle>Место</SEventTitle>
        <div>Описание: {id}</div>
      </SEventInfo>
    </SEventPage>
  );
};
