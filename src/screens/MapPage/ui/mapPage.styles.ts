import styled from "styled-components";
import Image from "next/image";
import { Button } from "antd";

export const SMapPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 40px 20px;
  height: 100%;
  overflow: auto;
  background: linear-gradient(
    180deg,
    #52bfff 0%,
    #46aef7 28%,
    #388fe9 62%,
    #2a76de 100%
  );
`;

export const SImagesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const SImageWrapper = styled.div`
  position: relative;
  flex: 1 1 480px;
  min-width: 600px;
  width: 100%;
  aspect-ratio: 4 / 3;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    min-width: 300px;
  }
`;

export const SImage = styled(Image)`
  object-fit: contain;
  height: 100%;
`;

export const SButton = styled(Button)`
  position: relative;

  &.ant-btn.ant-btn-color-default.ant-btn-variant-outlined,
  &.ant-btn.ant-btn-color-default.ant-btn-variant-outlined:hover {
    background: transparent;
    border: 1px solid #fff;
    padding: 16px 10px;
    color: #fff;
    line-height: 1;
    border-radius: 4px;
    font-size: 28px;
    height: max-content;
  }
`;
