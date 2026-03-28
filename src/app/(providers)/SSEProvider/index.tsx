"use client";
import { useNotificationsSSE } from "@/entities/notification";

export const SSEProvider = () => {
  useNotificationsSSE();

  return null;
};
