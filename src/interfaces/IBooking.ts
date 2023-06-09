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