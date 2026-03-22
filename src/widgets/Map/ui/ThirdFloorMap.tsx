import { FC } from "react";

import { DIRECTIONS } from "../model/map.types";
import {
  SFloorCard,
  SFloorTitle,
  SHallBlock,
  SHallText,
  SHatchedBlock,
  SMapCanvas,
  SMapZoneLink,
  SServiceCircle,
  SZoneLabel,
  STopBand,
} from "./map.styles";
import { ArrowDownLeft, ArrowDownRight, Micro, Stairs } from "@/shared/assets";
import Link from "next/link";

export const ThirdFloorMap: FC = () => {
  return (
    <SFloorCard>
      <SFloorTitle>3 ЭТАЖ</SFloorTitle>

      <SMapCanvas $ratio="318 / 196">
        <STopBand />

        <SMapZoneLink
          href={DIRECTIONS.math.href}
          $top="24%"
          $left="3%"
          $width="13%"
          $height="47%"
          $color={DIRECTIONS.math.color}
          aria-label={DIRECTIONS.math.title}
        >
          <SZoneLabel>
            <Micro />
          </SZoneLabel>
        </SMapZoneLink>

        <SMapZoneLink
          href={DIRECTIONS.economics.href}
          $top="24%"
          $left="84%"
          $width="13%"
          $height="47%"
          $color={DIRECTIONS.economics.color}
          aria-label={DIRECTIONS.economics.title}
        >
          <SZoneLabel>
            <Micro />
          </SZoneLabel>
        </SMapZoneLink>

        <Link href="/bigHall">
          <SHallBlock
            $top="14%"
            $left="27%"
            $width="44%"
            $height="65%"
            $color="#d0d0d0"
          />
          <SHallText $top="46%" $left="49%">
            БОЛЬШОЙ
            <br />
            ЗАЛ
          </SHallText>
        </Link>

        <Link href="/smallHall">
          <SHallBlock
            $top="78%"
            $left="27%"
            $width="44%"
            $height="22%"
            $color="#3258C9"
          />
          <SHallText $top="89%" $left="49%" $color="#fff">
            МАЛЫЙ ЗАЛ
          </SHallText>
        </Link>

        <SHatchedBlock $top="86%" $left="0%" $width="14%" $height="14%" />
        <SHatchedBlock $top="86%" $left="86%" $width="14%" $height="14%" />

        <SServiceCircle $top="35%" $left="26%" $size="8%">
          <ArrowDownRight />
        </SServiceCircle>
        <SServiceCircle $top="35%" $left="72%" $size="8%">
          <ArrowDownLeft />
        </SServiceCircle>
        <SServiceCircle $top="89%" $left="5%" $size="8%">
          <Stairs />
        </SServiceCircle>
        <SServiceCircle $top="89%" $left="87%" $size="8%">
          <Stairs />
        </SServiceCircle>
      </SMapCanvas>
    </SFloorCard>
  );
};
