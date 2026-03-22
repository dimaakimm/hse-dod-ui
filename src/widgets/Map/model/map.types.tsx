import { Info, Wardrobe } from "@/shared/assets";
import { WC } from "@/shared/assets";

export const DIRECTIONS = {
  economics: {
    title: "Экономика, менеджмент, маркетинг и юриспруденция",
    color: "#F37A2B",
    href: "/social",
  },
  math: {
    title: "Математика и компьютерные науки",
    color: "#2FA8E2",
    href: "/math",
  },
  design: {
    title: "Дизайн",
    color: "#EF294D",
    href: "/design",
  },
  humanities: {
    title: "Гуманитарные науки",
    color: "#7A5CB2",
    href: "/humanities",
  },
} as const;

export type TDirectionKey = keyof typeof DIRECTIONS;

export const LEFT_LEGEND = [
  { icon: <Info />, label: "Информационный стенд" },
  { icon: <Wardrobe />, label: "Гардероб" },
  { icon: <WC />, label: "Туалет" },
];

export const RIGHT_STATIC_LEGEND = [
  { color: "#223B7F", label: "Приемная комиссия" },
  { color: "#F1B82D", label: "Отдел профориентации, олимпиад и конкурсов" },
  { color: "#3258C9", label: "Центр довузовской подготовки" },
  { color: "#33A63A", label: "Военный учебный центр" },
];
