export interface IBooking {
  id?: number;
  from: string | Date;
  to: string | Date;
  email: string;
  bookId: number;
}
