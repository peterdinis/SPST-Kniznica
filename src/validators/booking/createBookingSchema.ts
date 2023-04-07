import {z} from "zod";

export const createBookingSchema = z.object({
    from: z.string({
        required_error: "Dátum od je povinný"
    }),

    to: z.string({
        required_error: "Dátum do je povinný"
    }),

    username: z.string({
        required_error: "Používateľské meno je povinné"
    }),

    bookId: z.number({
        required_error: "Id knihy je povinné"
    })
});

export const returnBookingSchema = z.object({
    username: z.string({
        required_error: "Používateľské meno je povinné"
    }),

    bookId: z.number({
        required_error: "Id knihy je povinné"
    })
});

export type createBookingType = z.infer<typeof createBookingSchema>;
export type returnBookingType = z.infer<typeof returnBookingSchema>;