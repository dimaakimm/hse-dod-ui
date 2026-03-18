import styled from "styled-components";
import { Button } from "antd";

export const SButtonLink = styled(Button)`
  &.ant-btn.ant-btn-color-default.ant-btn-variant-outlined {
    border-radius: 10px;
    width: 40px;
    height: 40px;
  }

  & .ant-btn-icon {
    display: flex;
    align-items: center;
    width: 20px;
    color: rgba(67, 171, 245);
  }
`;
