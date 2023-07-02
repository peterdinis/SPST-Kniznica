import { UsePaginationState, UsePaginationInstanceProps, HeaderGroup } from "react-table";
import { IBook } from "./IBook";
import { ITableProps } from "./ITable";

export interface ICategory {
    id?: number;
    externalId?: string;
    name: string;
    description: string;
    books?: Array<IBook[]>;
}

export type IDeleteCategory = Pick<ICategory, 'id'>;
export type IUpdateCategory = Partial<ICategory>;
export type ICategoryInfo = Partial<ICategory>;

export interface ICategoryInfoUpdate extends ICategoryInfo, UsePaginationState<ICategoryInfo>, UsePaginationInstanceProps<ICategoryInfo> {
    headerGroups?: HeaderGroup<ICategoryInfo>[];
    getTableBodyProps: (props?: ITableProps) => ITableProps;
    prepareRow: (...args: unknown[]) => void;
  }