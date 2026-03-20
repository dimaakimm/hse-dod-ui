import styled from "styled-components";
import Image from "next/image";

export const SBannerCloudsBalloons = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(
      1200px 420px at 50% -10%,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 55%
    ),
    linear-gradient(180deg, #52bfff 0%, #46aef7 28%, #388fe9 62%, #2a76de 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0) 18%
      ),
      linear-gradient(
        0deg,
        rgba(28, 96, 190, 0.18) 0%,
        rgba(28, 96, 190, 0) 35%
      );
    pointer-events: none;
    z-index: 0;
  }

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
`;

export const SBannerBalloonsImageWrapper = styled.div`
  position: absolute;
  top: -20%;
  right: -84%;
  bottom: -24%;
  left: -28%;
  pointer-events: none;
  z-index: 1;
`;

export const SBannerStarsWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 500px;
  height: 900px;
  left: 0;
  pointer-events: none;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxOldDesktops}) {
    display: none;
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
  margin: 0 20px;
`;

export const STitle = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  max-width: 500px;
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
