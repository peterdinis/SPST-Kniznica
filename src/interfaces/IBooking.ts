export interface ICreateBooking {
  id?: number;
  from: any;
  to: any;
  username: string;
  bookId: number;
}

export interface IReturnBooking{
  bookId: number;
  username: string;
}

export interface IBooking extends ICreateBooking {}