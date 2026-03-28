import styled, { css } from "styled-components";

const TIMELINE_COLUMN_WIDTH = 36;
const DOT_SIZE = 18;
const DOT_OFFSET_TOP = 42;

export const SEventListPage = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    padding: 32px 20px;
  }
`;

export const SMainContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 46px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    gap: 32px;
  }
`;

export const STitle = styled.div`
  font-weight: 400;
  font-size: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    font-size: 20px;
  }
`;

export const SEventsTimeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    gap: 8px;
  }

  &::before {
    content: "";
    position: absolute;
    left: ${TIMELINE_COLUMN_WIDTH / 2}px;
    top: ${DOT_OFFSET_TOP}px;
    bottom: ${DOT_OFFSET_TOP}px;
    width: 2px;
    background: #ffffff;
    transform: translateX(-50%);
    opacity: 0.95;
  }
`;

export const STimelineItem = styled.div`
  display: grid;
  grid-template-columns: ${TIMELINE_COLUMN_WIDTH}px 1fr;
  column-gap: 14px;
  align-items: start;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    column-gap: 0;
  }
`;

export const STimelineMarker = styled.div`
  position: relative;
  min-height: 100%;
`;

export const STimelineDot = styled.div<{ $active?: boolean }>`
  position: absolute;
  top: ${DOT_OFFSET_TOP}px;
  left: 50%;
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  flex-shrink: 0;

  ${({ $active }) =>
    $active
      ? css`
          background: #2f5cff;
          box-shadow: 0 0 0 4px rgba(47, 92, 255, 0.18);
        `
      : css`
          background: #ffffff;
        `}
`;
