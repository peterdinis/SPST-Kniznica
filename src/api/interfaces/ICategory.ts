import { IBook } from "./IBook";

export interface ICategory {
    id?: number;
    name: string;
    description: string;
    books: Array<IBook[]>;
}