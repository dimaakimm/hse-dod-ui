import styled, { css } from "styled-components";
import { IToastBarItem } from "@/shared/ui/ToastBar";
import { Button } from "antd";

export const STitle = styled.div<{
  $showDescription: boolean;
  $clickable: boolean;
  $withImage: boolean;
}>`
  color: #fff;

  ${({ $showDescription }) =>
    $showDescription &&
    css`
      min-height: 40px;
      display: flex;
      align-items: center;
    `}
  body:has(&) {
    .ant-notification-notice-wrapper {
      box-shadow: none;
      background: transparent;
      ${({ $clickable }) =>
        $clickable &&
        css`
          cursor: pointer;
        `}

      .ant-notification-notice ant-notification-notice-success ant-notification-notice-closable {
        align-items: unset;
      }
    }

    .ant-notification
      .ant-notification-notice-wrapper
      .ant-notification-notice-message {
      color: inherit;
    }

    .anticon
      anticon-exclamation-circle
      ant-notification-notice-icon
      ant-notification-notice-icon-warning,
    .ant-notification-notice-icon,
    .ant-notification
      .ant-notification-notice-wrapper
      .ant-notification-notice-icon-warning.anticon {
      display: none;
    }

    .ant-notification
      .ant-notification-notice-wrapper
      .ant-notification-notice-closable
      .ant-notification-notice-message {
      padding-inline-end: 30px;
    }

    .ant-notification
      .ant-notification-notice-wrapper
      .ant-notification-notice-with-icon
      .ant-notification-notice-message {
      margin-inline-start: 0 !important;
    }

    .ant-notification-bottomLeft .ant-notification-notice {
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.1),
        0 4px 8px rgba(0, 0, 0, 0.06);
    }
  }
`;

export const SDescription = styled.div`
  color: #fff;
  white-space: pre-line;
  flex-direction: column;
  gap: 8px;
  margin-inline-end: 30px;
`;

export const SDescriptionText = styled.div.attrs<{ $clamp: boolean }>({})`
  line-height: 1.3;

  ${({ $clamp }) =>
    $clamp &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
    `}
`;

export const SCloseIcon = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
`;

export const SIcon = styled.div<{
  $with: boolean;
  $type: IToastBarItem["type"];
}>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  svg {
    width: 24px;
  }
`;

export const STextButton = styled(Button)`
  text-decoration-line: underline;
  line-height: 120%;
`;

export const SImage = styled.div`
  width: 146px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

export const SContent = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 8px;
`;

export const SText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
