import Link from "next/link";
import styled, { css } from "styled-components";

interface IRectProps {
  $top: string;
  $left: string;
  $width: string;
  $height: string;
  $radius?: string;
}

interface ICircleProps {
  $top: string;
  $left: string;
  $size?: string;
  $bg?: string;
  $color?: string;
  $fontSize?: string;
  $borderColor?: string;
}

interface IHatchedRectProps extends IRectProps {
  $background?: string;
  $stripeColor?: string;
  $borderColor?: string;
}

interface IHallBlockProps extends IRectProps {
  $color?: string;
  $borderColor?: string;
  $withSideNotches?: boolean;
  $notchTop?: string;
  $notchWidth?: string;
  $notchHeight?: string;
  $notchColor?: string;
}

interface IMapZoneLinkProps extends IRectProps {
  $color: string;
  $contentPosition?: "center" | "left";
  $contentOffset?: string;
}

const absoluteRectStyles = css<IRectProps>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $radius }) => $radius ?? "0"};
  box-sizing: border-box;
`;

export const SWidget = styled.section`
  width: 100%;
  padding: 32px;
  border-radius: 24px;
  background: #ececec;
  z-index: 1;

  @media (max-width: ${({ theme }) =>
      theme.breakpoints?.maxTablets ?? "1024px"}) {
    padding: 24px;
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints?.maxMobile ?? "768px"}) {
    padding: 16px;
    border-radius: 16px;
  }
`;

export const SLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 64px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const SLeftColumn = styled.div`
  display: flex;
  align-self: start;

  @media (max-width: 1200px) {
    order: 1;
  }
`;

export const SCenterColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 32px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 1200px) {
    order: 2;
  }
`;

export const SRightColumn = styled.div`
  display: flex;
  align-self: start;

  @media (max-width: 1200px) {
    order: 3;
  }
`;

export const SLegendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const SLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  color: #2b2b2b;
  font-size: 18px;
  line-height: 1.35;

  svg {
    width: 70%;
    height: 70%;
  }
`;

export const SLegendIcon = styled.div`
  width: 44px;
  min-width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #223b7f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
`;

export const SRightLegend = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SRightLegendLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #2b2b2b;
  text-decoration: none;
  font-size: 18px;
  line-height: 1.35;
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

  &:hover {
    opacity: 0.85;
    transform: translateX(2px);
  }
`;

export const SRightLegendRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #2b2b2b;
  font-size: 18px;
  line-height: 1.35;
`;

export const SLegendColor = styled.div<{ $color: string }>`
  width: 26px;
  min-width: 26px;
  height: 18px;
  margin-top: 4px;
  border-radius: 4px;
  background: ${({ $color }) => $color};
`;

export const SLegendSeparator = styled.div`
  width: 100%;
  height: 1px;
  margin: 6px 0 4px;
  background: rgba(0, 0, 0, 0.2);
`;

export const SFloorCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SFloorTitle = styled.h3`
  margin: 0;
  color: #2f2f2f;
  font-size: 28px;
  font-weight: 500;
  line-height: 1;
`;

export const SMapCanvas = styled.div<{ $ratio: string }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $ratio }) => $ratio};
  border: 2px solid #4f68c8;
  background: #ededed;
  overflow: visible;
  box-sizing: border-box;
`;

export const STopBand = styled.div`
  position: absolute;
  inset: 0 0 auto 0;
  height: 13%;
  background: #a9a9a9;
`;

export const SHatchedBlock = styled.div<IHatchedRectProps>`
  ${absoluteRectStyles};

  border: 1px solid ${({ $borderColor }) => $borderColor ?? "#ababab"};
  background:
    repeating-linear-gradient(
      120deg,
      ${({ $stripeColor }) => $stripeColor ?? "rgba(150, 150, 150, 0.55)"} 0 2px,
      transparent 2px 6px
    ),
    ${({ $background }) => $background ?? "#efefef"};
`;

export const SHallBlock = styled.div<IHallBlockProps>`
  ${absoluteRectStyles};

  background: ${({ $color }) => $color ?? "#d9d9d9"};
  border: 2px solid ${({ $borderColor }) => $borderColor ?? "#b4b4b4"};

  ${({
    $withSideNotches,
    $notchTop = "31%",
    $notchWidth = "4%",
    $notchHeight = "14%",
    $notchColor = "#ededed",
    $borderColor = "#b4b4b4",
  }) =>
    $withSideNotches &&
    css`
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: ${$notchTop};
        width: ${$notchWidth};
        height: ${$notchHeight};
        background: ${$notchColor};
        border: 2px solid ${$borderColor};
        box-sizing: border-box;
      }

      &::before {
        left: calc(${$notchWidth} * -1);
        border-right: none;
      }

      &::after {
        right: calc(${$notchWidth} * -1);
        border-left: none;
      }
    `}
`;

export const SStand = styled.div<IRectProps>`
  ${absoluteRectStyles};
  background: #adadad;
`;

export const SMapZoneLink = styled(Link)<IMapZoneLinkProps>`
  ${absoluteRectStyles};

  display: flex;
  align-items: center;
  justify-content: ${({ $contentPosition }) =>
    $contentPosition === "left" ? "flex-start" : "center"};
  padding-left: ${({ $contentPosition, $contentOffset }) =>
    $contentPosition === "left" ? ($contentOffset ?? "10%") : "0"};
  text-decoration: none;
  background: ${({ $color }) => $color};
  border-radius: ${({ $radius }) => $radius ?? "8px"};
  box-sizing: border-box;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.96;
  }
`;

export const SZoneLabel = styled.span`
  font-size: 24px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxDesktops}) {
      width: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
      width: 12px;
    }
  }
`;

export const SServiceCircle = styled.div<ICircleProps>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg ?? "#223a7a"};
  color: ${({ $color }) => $color ?? "#fff"};
  border: 1px solid ${({ $borderColor }) => $borderColor ?? "#223a7a"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $fontSize }) => $fontSize ?? "18px"};
  font-weight: 400;
  line-height: 1;
  z-index: 2;
  box-sizing: border-box;

  svg {
    width: 60%;
    height: 60%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}) {
    width: 30px;
    height: 30px;
  }
`;

export const SHallText = styled.div<{
  $top: string;
  $left: string;
  $color?: string;
  $fontSize?: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: translate(-50%, -50%);
  color: ${({ $color }) => $color ?? "#2b2b2b"};
  text-align: center;
  font-size: ${({ $fontSize }) => $fontSize ?? "13px"};
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
  z-index: 2;
`;

export const SEntranceArc = styled.div`
  position: absolute;
  left: 50%;
  bottom: -8%;
  transform: translateX(-50%);
  width: 12%;
  height: 8%;
  border: 2px solid #4f68c8;
  border-top: none;
  border-radius: 0 0 999px 999px;
  background: transparent;
  box-sizing: border-box;
`;

export const SEntranceText = styled.div`
  position: absolute;
  left: 50%;
  bottom: -12%;
  transform: translateX(-50%);
  color: #2f2f2f;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap;
`;
