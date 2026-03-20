import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SHomePage = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const STitle = styled.div`
  font-weight: 900;
  font-size: 56px;
  line-height: 1;
  text-align: center;
`;

export const SSubContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 38px;
  justify-content: center;
`;

export const SSwiper = styled(Swiper)`
  width: 100%;
  height: 500px;

  .swiper-wrapper {
    height: 100%;
  }

  .swiper-slide {
    height: 100%;
  }
`;

export const SSwiperSlide = styled(SwiperSlide)`
  height: 100%;
`;
