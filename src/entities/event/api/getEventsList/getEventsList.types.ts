export interface IGetEventsListRequest {
  location?: string;
}

export interface IGetEventsListResponse {
  eventCards: {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    categories: {
      id: number;
      name: string;
    }[];
    directions: {
      id: number;
      name: string;
    }[];
    shortDescription: string;
  }[];
}
