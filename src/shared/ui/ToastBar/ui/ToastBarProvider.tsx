"use client";

import React, { FC, PropsWithChildren, useMemo } from "react";
import { ArgsProps } from "antd/es/notification/interface";
import { notification } from "antd";

import { IToastBarContext, ToastBarType } from "../model/toastBar.types";
import {
  SCloseIcon,
  SContent,
  SDescription,
  SDescriptionText,
  SImage,
  SText,
  STextButton,
  STitle,
} from "./toastBar.styles";
import { getToastBarStyles } from "../lib/getToastBarStyles";
import { NotificationContext } from "../lib/NotificationContext";
import { Cross } from "@/shared/assets";

const textButtonColorMap: Record<ToastBarType, TextButtonColor> = {
  info: "primary",
  error: "red",
  success: "green",
  warning: "orange",
  firebase: "primary",
};

export type TextButtonColor = "primary" | "orange" | "green" | "red";

export const ToastBarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [api, holder] = notification.useNotification({ maxCount: 5 });

  const value = useMemo<IToastBarContext>(() => {
    const notifyByType: Record<ToastBarType, (cfg: ArgsProps) => void> = {
      success: (cfg) => api.success(cfg),
      info: (cfg) => api.info(cfg),
      warning: (cfg) => api.warning(cfg),
      error: (cfg) => api.error(cfg),
      firebase: (cfg) => api.info(cfg),
    };

    return {
      notify: ({
        type = "success",
        message,
        description,
        duration = 10,
        button,
        onClick,
        imgUrl,
      }) => {
        const { color, bgColor, Icon } = getToastBarStyles(type, !!description);
        const showDescription = !!(description || button);
        const isClamp = type === "firebase";
        const minHeight = imgUrl ? 142 : 68;

        const onButtonClick = (e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          button?.onClick();
        };

        const config: ArgsProps = {
          message: (
            <SContent>
              {imgUrl && (
                <SImage>
                  <img src={imgUrl} alt="ww" />
                </SImage>
              )}
              {!imgUrl && Icon}

              <SText>
                <STitle
                  $withImage={!!imgUrl}
                  $clickable={!!onClick}
                  $showDescription={!showDescription}
                >
                  {message}
                </STitle>

                {showDescription && (
                  <SDescription>
                    <SDescriptionText $clamp={isClamp}>
                      {description}
                    </SDescriptionText>
                    {button && (
                      <STextButton
                        onClick={onButtonClick}
                        color={textButtonColorMap[type]}
                      >
                        {button.buttonText}
                      </STextButton>
                    )}
                  </SDescription>
                )}
              </SText>
            </SContent>
          ),
          duration,
          placement: "bottomLeft",
          style: {
            backgroundColor: bgColor,
            color,
            position: "sticky",
            padding: 16,
            display: "flex",
            width: 600,
            minHeight,
          },
          onClick,
          closeIcon: (
            <SCloseIcon>
              <Cross />
            </SCloseIcon>
          ),
        };

        notifyByType[type](config);
      },
    };
  }, [api]);

  return (
    <NotificationContext.Provider value={value}>
      {holder}
      {children}
    </NotificationContext.Provider>
  );
};
