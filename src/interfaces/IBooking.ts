export interface ICreateBooking {
  id?: number;
  from: number | string | Date;
  to: number | string | Date;
  username: string;
  bookId: number;
}

export interface IReturnBooking{
  bookId: number;
  username: string;
}

export interface IBooking extends ICreateBooking {}