import { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

import API, { DetailsError, IError } from "@/shared/api";
import {
  IGetEventsListRequest,
  IGetEventsListResponse,
} from "./getEventsList.types";
import { eventsListSchema } from "./getEventsList.validation";

export const getEventsListKey = "getEventsList";

export const getEventsList = async () => {
  return API({
    url: `http://46.229.141.86:44481/api/v1/events`,
    method: "GET",
  })
    .then(async ({ data }) => {
      const validate = await eventsListSchema.validate(data, {
        abortEarly: false,
      });
      return validate;
    })
    .catch(async (error: AxiosError<IError>) => {
      const errorName = "/getEventsList";
      const errorMessage = "error";

      throw new DetailsError(errorName, {
        status: error.response?.status,
        error: { errorID: error.response?.data.ErrorID, message: errorMessage },
      });
    });
};

export const useGetEventsList = () =>
  useQuery<IGetEventsListResponse, AxiosError, IGetEventsListResponse>({
    queryKey: [getEventsListKey],
    queryFn: async (): Promise<IGetEventsListResponse> => getEventsList(),
  });
