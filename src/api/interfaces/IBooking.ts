export interface IBooking {
    from: Date | String;
    to: Date | String;
    bookId: number;
    userId: number;
    extended?: boolean;
}