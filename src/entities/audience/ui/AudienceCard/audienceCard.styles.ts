import styled from "styled-components";

export const SCard = styled.div`
  position: relative;
  overflow: hidden;
  color: black;
  padding: 16px 33px;
  height: 270px;
  font-weight: 400;
  font-size: 20px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(123, 172, 238, 0.62069) 100%
  );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(180deg, #ffffff 0%, #2356d3 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;
