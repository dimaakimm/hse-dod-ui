import { ILocation } from "@/entities/location";
import { IAudience } from "@/entities/audience";

export interface EventsListPageProps {
  filter: ILocation | IAudience;
}
