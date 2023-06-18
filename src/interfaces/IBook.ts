export interface IBook {
  id?: number;
  externalId?: string;
  name: string;
  description: string;
  authorId: number;
  year: number;
  pages: number;
  publisher: string;
  image: string;
  status: string;
  categoryId: number;
}

/*  page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage, */

export interface IBookResult {
  data: Record<string, IBook>;
}


export type IUpdateBook = Partial<IBook>;
export type IBookInfo = Partial<IBook>

export interface IBookInfoUpdate extends IBookInfo {
  page?: any;
  nextPage?: any;
  previousPage?: any;
  canNextPage?: any;
  canPreviousPage?: any;
  prepareRow?: any;
  pageOptions?: any;
  gotoPage?: any;
}