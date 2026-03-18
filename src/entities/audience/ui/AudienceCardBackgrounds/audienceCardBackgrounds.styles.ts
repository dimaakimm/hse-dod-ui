import Image from "next/image";
import styled from "styled-components";

export const SImageWrapperCrowApple = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 30%;
  bottom: 14px;
`;

export const SImageWrapperHeart = styled.div`
  position: absolute;
  top: 30%;
  right: 40%;
  left: 0;
  bottom: 0;
`;

export const SImageWrapperCrowPoints = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  left: 40%;
  bottom: 10%;
`;

export const SImageWrapperLying = styled.div`
  position: absolute;
  top: 50%;
  right: 15%;
  left: 0;
  bottom: 10%;
`;

export const SImageWrapperCrowMap = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  left: 20%;
  bottom: 14%;
`;

export const SImage = styled(Image).attrs({ fill: true })`
  object-fit: contain;
`;
