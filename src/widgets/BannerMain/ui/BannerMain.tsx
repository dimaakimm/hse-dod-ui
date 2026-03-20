import { SSubContent, STitle } from "@/screens/HomePage/ui/homePage.styles";
import { BannerStars, CrowBanner } from "@/shared/assets";
import {
  SImage,
  SBanner,
  SBannerContent,
  SBannerImageWrapper,
  SBannerStarsWrapper,
  SAudienceText,
  STiming,
} from "./bannerMain.styles";

export const BannerMain = () => {
  return (
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
  );
};
