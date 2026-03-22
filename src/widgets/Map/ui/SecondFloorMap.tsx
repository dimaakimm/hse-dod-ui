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
  STopBand,
  SZoneLabel,
} from "./map.styles";
import { ArrowDownLeft, ArrowDownRight, Micro, Stairs } from "@/shared/assets";
import Link from "next/link";

export const SecondFloorMap: FC = () => {
  return (
    <SFloorCard>
      <SFloorTitle>2 ЭТАЖ</SFloorTitle>

      <SMapCanvas $ratio="672 / 431">
        <STopBand />

        <SHallBlock
          $top="17.5%"
          $left="3%"
          $width="12%"
          $height="45%"
          $radius="12px"
          $color="#f1bb2a"
          $borderColor="transparent"
        />
        <Link href="/bigHall">
          <SHallBlock
            $top="13.2%"
            $left="27%"
            $width="42%"
            $height="67%"
            $color="#2f5bd1"
            $borderColor="#8fa0df"
            $withSideNotches
            $notchTop="31%"
            $notchWidth="4%"
            $notchHeight="14%"
            $notchColor="#ededed"
          />
          <SHallText $top="46%" $left="48%" $color="#ffffff" $fontSize="18px">
            БОЛЬШОЙ
            <br />
            ЗАЛ
          </SHallText>
        </Link>

        <SHallBlock
          $top="80%"
          $left="40.5%"
          $width="16%"
          $height="7%"
          $color="#a9a9a9"
          $borderColor="transparent"
        />

        <SMapZoneLink
          href={DIRECTIONS.humanities.href}
          $top="24%"
          $left="84%"
          $width="12.5%"
          $height="46%"
          $radius="12px"
          $color={DIRECTIONS.humanities.color}
          aria-label={DIRECTIONS.humanities.title}
        >
          <SZoneLabel>
            <Micro />
          </SZoneLabel>
        </SMapZoneLink>

        <SMapZoneLink
          href={DIRECTIONS.economics.href}
          $top="88%"
          $left="27%"
          $width="40%"
          $height="12%"
          $radius="12px"
          $color={DIRECTIONS.economics.color}
          aria-label={DIRECTIONS.economics.title}
        >
          <SZoneLabel>
            <Micro />
          </SZoneLabel>
        </SMapZoneLink>

        <SHallBlock
          $top="67.5%"
          $left="5.5%"
          $width="6.5%"
          $height="8.5%"
          $radius="14px"
          $color="#4259b1"
          $borderColor="transparent"
        />

        <SHallBlock
          $top="88.5%"
          $left="18%"
          $width="7%"
          $height="8.5%"
          $radius="14px"
          $color="#223a7a"
          $borderColor="transparent"
        />

        <SHallBlock
          $top="88%"
          $left="70%"
          $width="6.5%"
          $height="8.5%"
          $radius="10px"
          $color="#33a63a"
          $borderColor="transparent"
        />

        <SHatchedBlock
          $top="83%"
          $left="0%"
          $width="17%"
          $height="17%"
          $background="#efefef"
          $stripeColor="rgba(150, 150, 150, 0.55)"
          $borderColor="#ababab"
        />

        <SHatchedBlock
          $top="83%"
          $left="81%"
          $width="19%"
          $height="17%"
          $background="#efefef"
          $stripeColor="rgba(150, 150, 150, 0.55)"
          $borderColor="#ababab"
        />

        <SServiceCircle
          $top="38.5%"
          $left="24.5%"
          $size="9.5%"
          $fontSize="28px"
        >
          <ArrowDownRight />
        </SServiceCircle>

        <SServiceCircle $top="38.5%" $left="74%" $size="9.5%" $fontSize="28px">
          <ArrowDownLeft />
        </SServiceCircle>

        <SServiceCircle $top="91%" $left="8%" $size="10%" $fontSize="24px">
          <Stairs />
        </SServiceCircle>

        <SServiceCircle $top="91%" $left="91%" $size="10%" $fontSize="24px">
          <Stairs />
        </SServiceCircle>
      </SMapCanvas>
    </SFloorCard>
  );
};
