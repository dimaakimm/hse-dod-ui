import { FC } from "react";

import { DIRECTIONS, RIGHT_STATIC_LEGEND } from "../model/map.types";
import {
  SLegendColor,
  SLegendSeparator,
  SRightLegend,
  SRightLegendLink,
  SRightLegendRow,
} from "./map.styles";

export const MapLegendRight: FC = () => {
  return (
    <SRightLegend>
      {Object.values(DIRECTIONS).map((item) => (
        <SRightLegendLink key={item.title} href={item.href}>
          <SLegendColor $color={item.color} />
          <span>{item.title}</span>
        </SRightLegendLink>
      ))}

      <SLegendSeparator />

      {RIGHT_STATIC_LEGEND.map((item) => (
        <SRightLegendRow key={item.label}>
          <SLegendColor $color={item.color} />
          <span>{item.label}</span>
        </SRightLegendRow>
      ))}
    </SRightLegend>
  );
};
