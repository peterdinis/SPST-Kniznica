import { z } from "zod";

export const createCategorySchema = z.object({
    name: z.string({
        required_error: "Meno nesmie byť prázdne"
    }),

    description: z.string({
        required_error: "Popis kategórie nesmie byť prázdny"
    }),
})

export type createCategoryType = z.infer<typeof createCategorySchema>;

export type updateCategoryType = Partial<createCategoryType>;