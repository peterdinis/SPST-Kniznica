import {
  UsePaginationState,
  UsePaginationInstanceProps,
  HeaderGroup,
} from "react-table";
import { ITableProps } from "./ITable";

export interface IAuthor {
  id?: number | string;
  externalId?: string;
  name: string;
  lastName: string;
  fullName: string
  image: string;
  birthYear: number;
  isAlive?: boolean;
  country: string;
  description: string;
  litPeriod: string;
}

export type IUpdateAuthor = Partial<IAuthor>;
export type IAuthorInfo = Partial<IAuthor>;

export interface IAuthorInfoUpdate extends IAuthorInfo, UsePaginationState<IAuthorInfo>, UsePaginationInstanceProps<IAuthorInfo> {
    headerGroups?: HeaderGroup<IAuthorInfo>[];
    getTableBodyProps: (props?: ITableProps) => ITableProps;
    prepareRow: (...args: unknown[]) => void;
  }