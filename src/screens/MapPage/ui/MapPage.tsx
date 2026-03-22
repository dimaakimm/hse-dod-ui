"use client";

import {
  SButton,
  SImage,
  SImagesRow,
  SImageWrapper,
  SMapPage,
} from "./mapPage.styles";
import { externalLinks } from "@/shared/config";
import { Map } from "@/widgets/Map";

export const MapPage = () => {
  return (
    <SMapPage>
      <Map />

      <a href={externalLinks.MAP_LINK} download="eventMap.pdf">
        <SButton>Скачать карту</SButton>
      </a>
    </SMapPage>
  );
};
