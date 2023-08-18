import {
  HeaderGroup,
  UsePaginationInstanceProps,
  UsePaginationState,
} from "react-table";
import { ITableProps } from "./ITable";

export interface IBook {
  id?: number;
  externalId?: string;
  name: string;
  description: string;
  authorName: string;
  year: number;
  pages: number;
  publisher: string;
  image: string;
  status: string;
  categoryName: string;
}

export interface IBookResult {
  data: Record<string, IBook>;
}

export type IUpdateBook = Partial<IBook>;

export type IBookInfo = Partial<IBook>;

export interface IBookInfoUpdate
  extends IBookInfo,
    UsePaginationState<IBookInfo>,
    UsePaginationInstanceProps<IBookInfo> {
  headerGroups?: HeaderGroup<IBookInfo>[];
  getTableBodyProps: (props?: ITableProps) => ITableProps;
  prepareRow: (...args: unknown[]) => void;
}
