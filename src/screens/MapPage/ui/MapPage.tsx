"use client";

import {
  SButton,
  SImage,
  SImagesRow,
  SImageWrapper,
  SMapPage,
} from "./mapPage.styles";
import { MapPage1, MapPage2 } from "@/shared/assets";
import { externalLinks } from "@/shared/config";

export const MapPage = () => {
  return (
    <SMapPage>
      <SImagesRow>
        <SImageWrapper>
          <SImage src={MapPage1.src} alt={"map page 1"} fill />
        </SImageWrapper>
        <SImageWrapper>
          <SImage src={MapPage2.src} alt={"map page 2"} fill />
        </SImageWrapper>
      </SImagesRow>

      <a href={externalLinks.MAP_LINK} download="eventMap.pdf">
        <SButton>Скачать карту</SButton>
      </a>
    </SMapPage>
  );
};
