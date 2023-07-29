import { z } from "zod";

export const createBookSchema = z.object({
    name: z.string({
        required_error: "Meno nemôže byť prázdne"
    }),

    description: z.string({
        required_error: "Popis nemôže prázdny"
    }),

    image: z.string({
        required_error: "Obrázok nemôže byť prázdny"
    }),

    publisher: z.string({
        required_error: "Vydavateľstvo nesmie byť prázdne"
    }),

    status: z.string({
        required_error: "Status nesmie byť prádny"
    }),

    quantity: z.number({
        required_error: "Počet kníh nesmie byť prázdny"
    }),

    pages: z.number({
        required_error: "Počet strán nesmie byť prázdny",
    }),

    year: z.number({
        invalid_type_error: "Rok nesmie byť prádzny",
    }),
    authorName: z.string({
        required_error: "Autor name is required"
    }),

    categoryName: z.string({
        required_error: "Category name is required"
    })
})

export type createBookType = z.infer<typeof createBookSchema>;

export type updateBookType = Partial<createBookType>;