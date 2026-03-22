"use client";

import { FC } from "react";

import { FirstFloorMap } from "./FirstFloorMap";
import { MapLegendLeft } from "./MapLegendLeft";
import { MapLegendRight } from "./MapLegendRight";
import { SecondFloorMap } from "./SecondFloorMap";
import { ThirdFloorMap } from "./ThirdFloorMap";
import { SCenterColumn, SLayout, SRightColumn, SWidget } from "./map.styles";

export const Map: FC = () => {
  return (
    <SWidget>
      <SLayout>
        <SCenterColumn>
          <MapLegendLeft />
          <FirstFloorMap />
          <SecondFloorMap />
          <ThirdFloorMap />
        </SCenterColumn>

        <SRightColumn>
          <MapLegendRight />
        </SRightColumn>
      </SLayout>
    </SWidget>
  );
};
