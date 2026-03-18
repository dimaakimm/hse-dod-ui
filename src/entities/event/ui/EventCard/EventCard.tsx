import {
  SCard,
  STime,
  STitle,
  SLocation,
  SMainInfoSection,
} from "./eventCard.styles";
import { EventCardProps } from "@/entities/event/model/eventCard.types";
import { FC } from "react";
import Link from "next/link";

export const EventCard: FC<EventCardProps> = ({
  title,
  time,
  place,
  active,
  id,
  filter,
}) => {
  const href = `${filter}/${id}`;

  return (
    <Link href={href}>
      <SCard $active={active}>
        <STime>{time}</STime>
        <SMainInfoSection>
          <STitle>{title}</STitle>
          <SLocation>{place}</SLocation>
        </SMainInfoSection>
      </SCard>
    </Link>
  );
};
