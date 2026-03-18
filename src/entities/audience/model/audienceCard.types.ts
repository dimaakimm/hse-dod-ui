import { JSX } from "react";

export interface AudienceCardProps {
  link: string;
  title: string;
  BackgroundImage: () => JSX.Element;
  blank?: boolean;
}
