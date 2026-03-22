import { useTranslations } from "next-intl";
import { IFilter } from "@/entities/filters/model/filters.types";

export const useGetEventsListTitle = (filter: IFilter) => {
  const t = useTranslations("list");
  switch (filter) {
    case "parents":
      return t("forParents");
    case "applicants":
      return t("forApplicants");
    case "bigHall":
      return t("bigHall");
    case "smallHall":
      return t("smallHall");
    case "design":
      return t("design");
    case "humanities":
      return t("humanities");
    case "math":
      return t("math");
    case "social":
      return t("social");
  }
};
