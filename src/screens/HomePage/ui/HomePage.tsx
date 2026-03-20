"use client";

import {
  SCardContainer,
  SHomePage,
  SSwiper,
  SSwiperSlide,
} from "./homePage.styles";
import { AudienceCard } from "@/entities/audience";
import { AudienceCards } from "@/entities/audience/lib/audienceCards";
import { BannerMain } from "@/widgets/BannerMain";
import { BannerCloudsBalloons } from "@/widgets/BannerCloudsBalloons";
import { BannerCrowBalloons } from "@/widgets/BannerCrowBalloons";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const HomePage = () => {
  return (
    <SHomePage>
      <SSwiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SSwiperSlide>
          <BannerMain />
        </SSwiperSlide>
        <SSwiperSlide>
          <BannerCloudsBalloons />
        </SSwiperSlide>
        <SSwiperSlide>
          <BannerCrowBalloons />
        </SSwiperSlide>
      </SSwiper>
      <SCardContainer>
        {AudienceCards.map((item) => (
          <AudienceCard key={item.title} {...item} />
        ))}
      </SCardContainer>
    </SHomePage>
  );
};
