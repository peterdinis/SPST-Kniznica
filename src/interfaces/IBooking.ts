export interface ICreateBooking {
  id?: number;
  from: any;
  to: any;
  username: string;
  bookName: string;
}

export interface IReturnBooking{
  
}

export interface IBooking extends ICreateBooking {}