export interface ICreateBooking {
  id?: number;
  from: any;
  to: any;
  username: string;
  bookExternalId: number;
}

export interface IReturnBooking{
  bookExternalId: number;
  username: string;
}

export interface IBooking extends ICreateBooking {}