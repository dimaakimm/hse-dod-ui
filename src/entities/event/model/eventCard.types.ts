import { IFilter } from "@/entities/filters";

export interface EventCardProps {
  id: string;
  time: string;
  title: string;
  place: string;
  active: boolean;
  filter: IFilter;
}

export interface SEventCardProps {
  $active: boolean;
}
