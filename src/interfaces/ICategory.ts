import { IBook } from "./IBook";

export interface ICategory {
    id?: number;
    externalId?: string;
    name: string;
    description: string;
    books?: Array<IBook[]>;
}