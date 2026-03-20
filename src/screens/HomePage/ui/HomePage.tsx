"use client";

import {
  SAudienceText,
  SBanner,
  SBannerButton,
  SBannerContent,
  SBannerImageWrapper,
  SBannerStarsWrapper,
  SCardContainer,
  SHomePage,
  SImage,
  SSubContent,
  STiming,
  STitle,
} from "./homePage.styles";
import { BannerStars, CrowBanner } from "@/shared/assets";
import { AudienceCard } from "@/entities/audience";
import { AudienceCards } from "@/entities/audience/lib/audienceCards";

export const HomePage = () => {
  return (
    <SHomePage>
      <SBanner>
        <SBannerImageWrapper>
          <SImage src={CrowBanner.src} fill alt={"crow"} />
        </SBannerImageWrapper>
        <SBannerStarsWrapper>
          <SImage src={BannerStars.src} fill alt={"stars"} />
        </SBannerStarsWrapper>

        <SBannerContent>
          <STitle>
            ДЕНЬ
            <br /> ОТКРЫТЫХ ДВЕРЕЙ
            <br /> ВЫСШЕЙ ШКОЛЫ
            <br /> ЭКОНОМИКИ
          </STitle>
          <SSubContent>
            <SAudienceText>для поступающих в бакалавриат</SAudienceText>
            <STiming>19 апреля, 10:00, пл. Октябрьская, 1 </STiming>
          </SSubContent>
        </SBannerContent>
      </SBanner>
      <SCardContainer>
        {AudienceCards.map((item) => (
          <AudienceCard key={item.title} {...item} />
        ))}
      </SCardContainer>
    </SHomePage>
  );
};
