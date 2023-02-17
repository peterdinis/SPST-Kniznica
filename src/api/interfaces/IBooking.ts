export interface IBooking {
    id?: string | number;
    from: string | Date;
    to: string | Date;
    userId: string;
    bookId: number;
}