"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

type NotificationItem = {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  isRead: boolean;
};

export const useNotificationsSSE = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const es = new EventSource(
      "http://46.229.141.86:44481/api/v1/notifications/stream",
    );

    const handleNotification = (raw: MessageEvent) => {
      try {
        const incoming = JSON.parse(raw.data) as NotificationItem;

        // 1) моментально обновляем кэш уведомлений
        queryClient.setQueryData<NotificationItem[]>(
          ["notifications"],
          (old = []) => [incoming, ...old],
        );

        // 2) если у тебя есть счётчик непрочитанных
        queryClient.setQueryData<number>(
          ["notifications", "unread-count"],
          (old = 0) => old + 1,
        );

        // 3) тут же можно показать toast
        // toast.success(incoming.title)

        // 4) или системное уведомление браузера
        if (
          typeof window !== "undefined" &&
          "Notification" in window &&
          Notification.permission === "granted"
        ) {
          new Notification(incoming.title, {
            body: incoming.message,
          });
        }
      } catch (e) {
        console.error("Ошибка парсинга SSE уведомления", e);
      }
    };

    es.addEventListener("notification", handleNotification as EventListener);

    es.onmessage = handleNotification;

    es.onerror = (e) => {
      console.error("SSE connection error", e);
    };

    return () => {
      es.close();
    };
  }, [queryClient]);
};
