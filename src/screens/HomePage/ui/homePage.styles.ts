import styled from "styled-components";
import { Button } from "antd";
import Image from "next/image";

export const SHomePage = styled.div`
  overflow-y: auto;
`;
export const SBanner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  padding: 6px 32px 30px;
  background:
    radial-gradient(
      1200px 420px at 50% -10%,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 55%
    ),
    linear-gradient(180deg, #52bfff 0%, #46aef7 28%, #388fe9 62%, #2a76de 100%);
  border-bottom: 1px solid rgba(35, 104, 192, 0.35);

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
`;

export const SBannerImageWrapper = styled.div`
  position: absolute;
  top: -10%;
  right: -84%;
  bottom: -76%;
  left: -28%;
  pointer-events: none;
`;

export const SBannerStarsWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 500px;
  height: 900px;
  left: 0;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxOldDesktops}) {
    display: none;
  }
`;

export const SBannerContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
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

export const SAudienceText = styled.div`
  font-weight: 400;
  font-style: italic;
  font-size: 40px;
  line-height: 1;
  text-align: center;
`;

export const STiming = styled.div`
  font-weight: 400;
  font-size: 38px;
  line-height: 1;
  text-align: center;
`;

export const SCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 38px;
  justify-content: center;
`;

export const SBannerButton = styled(Button)`
  position: relative;

  &.ant-btn.ant-btn-color-default.ant-btn-variant-outlined,
  &.ant-btn.ant-btn-color-default.ant-btn-variant-outlined:hover {
    background: transparent;
    border: 1px solid #fff;
    padding: 16px 2px;
    color: #fff;
    line-height: 1;
    border-radius: 4px;
    font-size: 28px;
    height: max-content;
  }
`;

export const SImage = styled(Image)`
  object-fit: contain;
`;
