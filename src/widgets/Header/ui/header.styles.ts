import styled from "styled-components";
import { Button } from "antd";

export const SHeader = styled.header`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(67, 171, 245, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  padding: 10px 26px;
`;

export const SButtonsSection = styled.header`
  display: flex;
  gap: 6px;
`;

export const SLogoWrapper = styled.header`
  display: flex;
  gap: 46px;
  align-items: center;
`;

export const SButton = styled(Button)`
  position: relative;

  &.ant-btn.ant-btn-color-default.ant-btn-variant-outlined,
  &.ant-btn.ant-btn-color-default.ant-btn-variant-outlined:hover {
    background: #fff;
    padding: 8px 20px;
    color: #2356d3;
    border-radius: 4px;
    height: max-content;
    font-weight: 400;
    font-size: 20px;
  }
`;
