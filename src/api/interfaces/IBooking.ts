export interface IBooking {
    id?: string | number;
    name: string;
    lastName: string;
    from: string | Date;
    to: string | Date;
    userId: string;
    bookId: number;
    status: string;
}