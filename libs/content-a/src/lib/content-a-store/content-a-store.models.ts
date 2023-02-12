export type DataQuery = Record<string, string | string[]>;

export interface Loadable<TData> {
  query?: DataQuery;
  data?: TData;
  isLoading?: boolean;
}

export interface ContentAModel {
  id: string;
  summary: string;
  category: ContentACategory;
  tags: string[];
}

export type ContentACategory = 'sport' | 'music' | 'videoGame';
