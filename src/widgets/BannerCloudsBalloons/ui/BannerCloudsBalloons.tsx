import {
  SBannerBalloonsImageWrapper,
  SBannerCloudsBalloons,
  SBannerStarsWrapper,
  SContent,
  SImage,
  SInfoSection,
  SInfoText,
  STitle,
} from "./bannerCloudsBalloons.styles";
import { CloudsStars, Balloons } from "@/shared/assets";

export const BannerCloudsBalloons = () => {
  return (
    <SBannerCloudsBalloons>
      <SBannerBalloonsImageWrapper>
        <SImage src={Balloons.src} fill alt={"crow"} />
      </SBannerBalloonsImageWrapper>
      <SBannerStarsWrapper>
        <SImage src={CloudsStars.src} fill alt={"stars"} />
      </SBannerStarsWrapper>
      <SContent>
        <SInfoSection>
          <SInfoText>12:00</SInfoText>
          <SInfoText>БОЛЬШАЯ СЦЕНА</SInfoText>
        </SInfoSection>
        <STitle>
          Выступление
          <br /> Приёмной комиссии
          <br /> “Название темы”
        </STitle>
      </SContent>
    </SBannerCloudsBalloons>
  );
};
