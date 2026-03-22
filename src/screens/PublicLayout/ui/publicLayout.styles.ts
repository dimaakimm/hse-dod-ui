import styled from "styled-components";
import Image from "next/image";

export const SPublicLayout = styled.div`
  background: linear-gradient(
    180deg,
    #52bfff 0%,
    #46aef7 28%,
    #388fe9 62%,
    #2a76de 100%
  );
  position: relative;
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const SBannerStarsWrapper = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

export const SImage = styled(Image)`
  object-fit: contain;
  filter: blur(2px);
`;
