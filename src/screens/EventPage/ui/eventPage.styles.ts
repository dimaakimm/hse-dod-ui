import styled from "styled-components";

export const SEventPage = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  gap: 44px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    gap: 18px;
  }
`;

export const STitle = styled.div`
  font-weight: 400;
  font-size: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    font-size: 20px;
  }
`;

export const SEventInfo = styled.div`
  padding: 55px 80px;
  background: rgba(255, 255, 255, 0.7);
  color: #000;
  font-weight: 400;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  border-radius: 5px;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    font-size: 20px;
    padding: 24px 10px;
  }
`;

export const SEventTitle = styled.div`
  font-weight: 600;
`;
