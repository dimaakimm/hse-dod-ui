import styled from "styled-components";
import { Select } from "antd";

export const SSelect = styled(Select)`
  &.ant-select.ant-select-outlined {
    border: 1px solid #fff;
    background: #2356d3;
    color: #fff;
    border-radius: 4px;
    font-size: 30px;
    padding: 16px 40px;
    width: 480px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
      font-size: 20px;
      padding: 8px;
      width: 100%;
    }
  }

  &.ant-select .ant-select-placeholder {
    color: #fff;
    text-transform: uppercase;
    font-size: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
      font-size: 20px;
    }
  }

  &.ant-select .ant-select-suffix .anticon {
    color: #fff;
    width: 42px;
    height: 32px;
    svg {
      height: 100%;
      width: 100%;
    }
  }

  &.ant-select-single:not(.ant-select-customize) .ant-select-content-has-value {
    flex-wrap: wrap;
    white-space: unset;
  }

  &.ant-select-dropdown
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: #fff;
    background: #2356d3;
  }
`;

export const SSelectDropdown = styled.div`
  .ant-select-item {
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    transition: background 0.2s ease;
    padding: 12px 14px;
    font-size: 25px;
  }

  &.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: #fff;
    background: #2356d3;
  }

  .rc-virtual-list-holder-inner {
    padding: 20px 12px;
    gap: 12px;
  }
`;
