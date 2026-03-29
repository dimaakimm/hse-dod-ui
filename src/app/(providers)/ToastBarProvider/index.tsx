"use client";

import React, { PropsWithChildren } from "react";
import { ToastBarProvider as Provider } from "@/shared/ui/ToastBar";

export const ToastBarProvider = ({ children }: PropsWithChildren) => {
  return <Provider>{children}</Provider>;
};
