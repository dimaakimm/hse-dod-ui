"use client";

import { SEventListPage, SMainContent, STitle } from "./eventsListPage.styles";
import { SpecializationOptions } from "@/entities/specialization";
import { Select } from "@/shared/ui/Select/ui/Select";
import { FC, useState } from "react";
import { SelectProps } from "antd";
import { EventCard, useGetEventsListTitle } from "@/entities/event";
import { EventsListPageProps } from "../model/eventsListPage.types";

const mockedEvents = [
  {
    id: "123123-123123",
    title: "Родительский клуб  “Как помочь ребенку перед ЕГЭ”",
    time: "10:15-11:00",
    place: "3 этаж - Малый зал ",
    active: false,
  },
  {
    id: "2987979-123123",
    title: "Родительский клуб  “Как помочь ребенку перед ЕГЭ”",
    time: "10:15-11:00",
    place: "3 этаж - Малый зал ",
    active: false,
  },
  {
    id: "3278973123-123123",
    title: "Родительский клуб  “Как помочь ребенку перед ЕГЭ”",
    time: "10:15-11:00",
    place: "3 этаж - Малый зал ",
    active: true,
  },
  {
    id: "47867823-123123",
    title: "Родительский клуб  “Как помочь ребенку перед ЕГЭ”",
    time: "10:15-11:00",
    place: "3 этаж - Малый зал ",
    active: false,
  },
];

export const EventsListPage: FC<EventsListPageProps> = ({ filter }) => {
  const [activeOption, setActiveOption] = useState<
    "social" | "design" | "math" | "humanities"
  >();
  const title = useGetEventsListTitle(filter);

  const onOptionChange: SelectProps["onChange"] = (value) =>
    setActiveOption(value);

  return (
    <SEventListPage>
      <Select
        value={activeOption}
        onChange={onOptionChange}
        placeholder={"Профили обучения"}
        options={SpecializationOptions}
      />
      <SMainContent>
        <STitle>{title}</STitle>
        <div style={{ flexDirection: "column", display: "flex", gap: 50 }}>
          {mockedEvents.map((item) => (
            <EventCard filter={filter} {...item} key={item.title} />
          ))}
        </div>
      </SMainContent>
    </SEventListPage>
  );
};
