import styled from "styled-components";
import Image from "next/image";

export const SBannerCrowBalloons = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 60px 120px 100px 120px;
  height: 100%;
  background:
    radial-gradient(
      1200px 420px at 50% -10%,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 55%
    ),
    linear-gradient(180deg, #52bfff 0%, #46aef7 28%, #388fe9 62%, #2a76de 100%);
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        88.24deg,
        rgba(42, 122, 228, 0.6) 1.49%,
        rgba(123, 172, 238, 0.372414) 68.66%,
        rgba(255, 255, 255, 0) 98.51%
      );
      backdrop-filter: blur(0px);
      pointer-events: none;
      z-index: 2;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    padding: 60px 20px 200px 60px;
  }
`;

export const SBannerImageWrapper = styled.div`
  position: absolute;
  top: -20%;
  right: -80%;
  bottom: -10%;
  left: -40%;
  pointer-events: none;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    top: -10%;
    right: -20%;
    bottom: -50%;
    left: -40%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    top: -20%;
    right: -60%;
    bottom: -50%;
    left: -100%;
  }
`;

export const SImage = styled(Image)`
  object-fit: contain;
`;

export const SContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 56px;
  align-items: center;
  z-index: 3;
  max-width: 510px;
`;

export const STitle = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
`;

export const SInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  text-align: center;
`;

export const SInfoText = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 30px;
`;
