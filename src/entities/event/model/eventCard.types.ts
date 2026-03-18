import { IAudience } from "@/entities/audience";
import { ILocation } from "@/entities/location";

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
