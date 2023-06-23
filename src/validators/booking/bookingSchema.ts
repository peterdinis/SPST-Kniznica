import { z } from "zod";

export const createBookingSchema = z.object({
  from: z.string({
    required_error: "Dátum od nesmie byť prázdny",
  }),

  to: z.string({
    required_error: "Dátum do nesmie byť prádzndy",
  }),

  username: z.string({
    required_error: "Meno nesmie byť prázdne",
  }),

  bookId: z.number({
    required_error: "Id knihy nesmie byť prázdne",
  }),
});

export const returnBookingSchema = z.object({
  username: z.string({
    required_error: "Meno nesmie byť prázdne",
  }),

  bookId: z.number({
    required_error: "Id knihy nesmie byť prázdne",
  }),
});

export type createBookingType = z.infer<typeof createBookingSchema>;
export type returnBookingType = z.infer<typeof returnBookingSchema>;
