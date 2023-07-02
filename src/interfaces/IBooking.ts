import { UsePaginationState, UsePaginationInstanceProps, HeaderGroup } from "react-table";
import { ITableProps } from "./ITable";

export interface ICreateBooking {
  id?: number;
  from: string;
  to: string;
  username: string;
  bookId: number;
}

export interface IReturnBooking{
  bookId: number;
  username: string;
}

export interface IBooking extends ICreateBooking {}

export type IBookingInfo = Partial<ICreateBooking>;

export interface IBookingInfoUpdate extends IBookingInfo, UsePaginationState<IBookingInfo>, UsePaginationInstanceProps<IBookingInfo> {
  headerGroups?: HeaderGroup<IBookingInfo>[];
  getTableBodyProps: (props?: ITableProps) => ITableProps;
  prepareRow: (...args: unknown[]) => void;
}