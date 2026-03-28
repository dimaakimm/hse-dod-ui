import styled, { css } from "styled-components";
import { SEventCardProps } from "@/entities/event/model/eventCard.types";

export const SCard = styled.div<SEventCardProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fff;
  width: 100%;
  border-radius: 5px;
  color: #000;
  padding: 16px 82px;
  z-index: 1;

  ${({ $active }) =>
    $active &&
    css`
      color: rgba(35, 86, 211, 1);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    padding: 8px;
  }
`;

export const STime = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const SMainInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const STitle = styled.div`
  font-weight: 400;
  font-size: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    font-size: 20px;
  }
`;

export const SLocation = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
