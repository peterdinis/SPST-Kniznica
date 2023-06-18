import { TableState } from "react-table";

export interface CustomTableState<T extends object> extends TableState<T> {
    pageIndex: number;
}