export interface Loadable<TData> {
  isLoading?: boolean,
  data?: TData,
  query?: HttpQuery
}

export type HttpQuery = Record<string, string[]>;
