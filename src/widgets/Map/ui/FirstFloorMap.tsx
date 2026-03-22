import { FC } from "react";

import { DIRECTIONS } from "../model/map.types";
import {
  SEntranceArc,
  SEntranceText,
  SFloorCard,
  SFloorTitle,
  SHallBlock,
  SHatchedBlock,
  SMapCanvas,
  SMapZoneLink,
  SServiceCircle,
  SStand,
  SZoneLabel,
} from "./map.styles";
import { Info, Micro, Stairs, Wardrobe, WC } from "@/shared/assets";

export const FirstFloorMap: FC = () => {
  return (
    <SFloorCard>
      <SFloorTitle>1 ЭТАЖ</SFloorTitle>

      <SMapCanvas $ratio="451 / 274">
        <SHatchedBlock
          $top="0%"
          $left="0%"
          $width="17.5%"
          $height="60%"
          $background="#dfe6ff"
          $stripeColor="rgba(90, 111, 203, 0.6)"
          $borderColor="#5a6fcb"
        />

        <SHatchedBlock
          $top="0%"
          $left="17.5%"
          $width="54%"
          $height="18%"
          $background="#efefef"
          $stripeColor="rgba(167, 167, 167, 0.55)"
          $borderColor="#b7b7b7"
        />

        <SHatchedBlock
          $top="14%"
          $left="88%"
          $width="12%"
          $height="32%"
          $background="#dfe6ff"
          $stripeColor="rgba(90, 111, 203, 0.6)"
          $borderColor="#5a6fcb"
        />

        <SHatchedBlock
          $top="84%"
          $left="0%"
          $width="17.5%"
          $height="16%"
          $background="#efefef"
          $stripeColor="rgba(167, 167, 167, 0.55)"
          $borderColor="#b7b7b7"
        />

        <SHatchedBlock
          $top="84%"
          $left="80%"
          $width="20%"
          $height="16%"
          $background="#efefef"
          $stripeColor="rgba(167, 167, 167, 0.55)"
          $borderColor="#b7b7b7"
        />

        <SServiceCircle $top="8%" $left="24%">
          <Wardrobe />
        </SServiceCircle>

        <SServiceCircle $top="8%" $left="45%">
          <Info />
        </SServiceCircle>

        <SServiceCircle $top="8%" $left="61%">
          <Wardrobe />
        </SServiceCircle>

        <SServiceCircle $top="39%" $left="8.5%" $size="10.5%" $fontSize="13px">
          <WC />
        </SServiceCircle>

        <SServiceCircle $top="40%" $left="90%" $size="10.5%" $fontSize="13px">
          <WC />
        </SServiceCircle>

        <SServiceCircle $top="13%" $left="91.5%" $size="9.5%">
          <Stairs />
        </SServiceCircle>
        <SServiceCircle $top="90%" $left="7.5%" $size="9.5%">
          <Stairs />
        </SServiceCircle>

        <SServiceCircle $top="90%" $left="92%" $size="9.5%">
          <Stairs />
        </SServiceCircle>

        <SStand $top="29%" $left="22%" $width="6.2%" $height="11%" />
        <SStand $top="29%" $left="37%" $width="6.2%" $height="11%" />
        <SStand $top="29%" $left="52%" $width="6.2%" $height="11%" />
        <SStand $top="29%" $left="67%" $width="6.2%" $height="11%" />

        <SHallBlock
          $top="73%"
          $left="28%"
          $width="40%"
          $height="27%"
          $color="#d9d9d9"
          $borderColor="#b4b4b4"
        />

        <SMapZoneLink
          href={DIRECTIONS.design.href}
          $top="60%"
          $left="74%"
          $width="25%"
          $height="22%"
          $color="#d73a47"
          aria-label={DIRECTIONS.design.title}
        >
          <SZoneLabel>
            <Micro />
          </SZoneLabel>
        </SMapZoneLink>

        <SEntranceArc />
        <SEntranceText>ВХОД</SEntranceText>
      </SMapCanvas>
    </SFloorCard>
  );
};
