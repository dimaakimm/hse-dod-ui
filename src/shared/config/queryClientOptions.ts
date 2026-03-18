import { QueryClientConfig } from '@tanstack/query-core';

interface IQueryClientOptions {
  isServer: boolean;
}

export const getQueryClientConfig = ({ isServer }: IQueryClientOptions): QueryClientConfig => {
  const cacheTime = isServer ? 0 : 60_000 * 5;

  return {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: cacheTime,
        gcTime: cacheTime,
        retry: isServer ? 0 : 1,
        refetchOnMount: false,
        queryKeyHashFn: (queryKey) => JSON.stringify(queryKey),
      },
    },
  };
};
