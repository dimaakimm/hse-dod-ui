import { AudienceCardProps } from "../model/audienceCard.types";
import {
  AudienceCardBackgroundCrowApple,
  AudienceCardBackgroundCrowLying,
  AudienceCardBackgroundCrowMap,
  AudienceCardBackgroundCrowPoints,
  AudienceCardBackgroundHeart,
} from "../ui/AudienceCardBackgrounds/AudienceCardBackgrounds";
import { externalLinks, routes } from "@/shared/config";

export const AudienceCards: AudienceCardProps[] = [
  {
    link: routes.APPLICANTS_PAGE,
    title: "программа абитуриентам",
    BackgroundImage: AudienceCardBackgroundCrowApple,
  },
  {
    link: routes.PARENTS_PAGE,
    title: "программа родителям",
    BackgroundImage: AudienceCardBackgroundHeart,
  },
  {
    link: externalLinks.QA_LINK,
    title: "задать вопрос приемной комиссии",
    BackgroundImage: AudienceCardBackgroundCrowPoints,
    blank: true,
  },
  {
    link: externalLinks.FEEDBACK_LINK,
    title: "оставить отзыв о мероприятии",
    BackgroundImage: AudienceCardBackgroundCrowLying,
    blank: true,
  },
  {
    link: routes.MAP_PAGE,
    title: "интерактивная карта мероприятия",
    BackgroundImage: AudienceCardBackgroundCrowMap,
  },
];
