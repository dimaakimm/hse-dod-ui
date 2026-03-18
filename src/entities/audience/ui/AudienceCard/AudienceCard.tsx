"use client";

import { SCard } from "./audienceCard.styles";
import { AudienceCardProps } from "@/entities/audience/model/audienceCard.types";
import { FC } from "react";
import Link from "next/link";

export const AudienceCard: FC<AudienceCardProps> = ({
  title,
  BackgroundImage,
  link,
  blank,
}) => {
  const target = blank ? "_blank" : undefined;

  return (
    <Link href={link} target={target}>
      <SCard>
        <div>{title.toUpperCase()}</div>
        <BackgroundImage />
      </SCard>
    </Link>
  );
};
