import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { HttpQuery } from "./common.models";

export interface DataFilterSet {
  name: string;
  version: string;
  filters: DataFilter[];
}

export interface DataFilter {
  name: string;
  type: 'period'|'text'|'select';
  caption: string;
  value?: string[]|string;
  api?: ApiInfo;
  options?: {
    multiple?: boolean;
  };
}

export interface ApiInfo {
  url: string;
  params?: string[];
  value?: unknown;
}

export interface ValidationError {
  errors: Record<string, string[]>;
}

export type DataQuery = Record<string, string|string[]>;

export function getDataQuery(filters: DataFilter[], options: { filterNames?: string[] } = {}): DataQuery {
  return filters
    ? Object.fromEntries(filters
      .filter(x => !!x)
      .filter(x => !options.filterNames || options.filterNames.includes(x.name))
      .map(x => [x.name, x.value ?? []]))
    : {};
}

export function buildForm(formBuilder: FormBuilder, filters?: DataFilter[])
  : FormGroup<Record<string, FormControl<string[]>>> {
  return formBuilder.group(Object.fromEntries(
    filters?.map(({name, value}) => [name, new FormControl(value) as FormControl<string[]>]) ?? [],
  ));
}
