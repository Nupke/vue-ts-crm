import type { VNode } from "vue";

export type WithFalse<T> = T | false;

export type TargetType = "_blank" | "_self" | unknown;

export interface MetaRecord {
  icon?: string | VNode;
  type?: string;
  title?: string;
  authority?: string | string[];
  target?: TargetType;
  hideChildInMenu?: boolean;
  hideInMenu?: boolean;
  disabled?: boolean;
  flatMenu?: boolean;
  [key: string]: any;
}

export interface MenuDataItem {
  path: string;
  name?: string | symbol;
  meta?: MetaRecord;
  children?: MenuDataItem[];
}
