import { CrowBalloons } from "@/shared/assets";
import {
  SBannerCrowBalloons,
  SBannerImageWrapper,
  SImage,
  SContent,
  SInfoSection,
  SInfoText,
  STitle,
} from "./bannerCrowBalloons.styles";

export const BannerCrowBalloons = () => {
  return (
    <SBannerCrowBalloons>
      <SBannerImageWrapper>
        <SImage src={CrowBalloons.src} fill alt={"crow balloons"} />
      </SBannerImageWrapper>
      <SContent>
        <SInfoSection>
          <SInfoText>11:00-15:00</SInfoText>
          <SInfoText>
            ПРАВОЕ КРЫЛО
            <br /> 2 ЭТАЖ
          </SInfoText>
        </SInfoSection>
        <STitle>ОТКРЫТЫЙ МИКРОФОН СО СТУДЕНТАМИ</STitle>
      </SContent>
    </SBannerCrowBalloons>
  );
};
