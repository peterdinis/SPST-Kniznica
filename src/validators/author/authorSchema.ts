import {z} from "zod";

export const createAuthorSchema = z.object({
    name: z.string({
        required_error: "Meno nesmie byť prázdne"
    }),

    lastName: z.string({
        required_error: "Priezvisko nesmie byť prázdne"
    }),

    picture: z.string({
        required_error: "Fotka nemôže byť prádna"
    }),

    birthYear: z.number({
        required_error: "Dátum narodenia nesmie byť prázdny" 
    }),

    isAlive: z.boolean({
        required_error: "isAlive musí byť true alebo false"
    }),

    country: z.string({
        required_error: "Krajina pôvodu nesmie byť prázdna"
    }),

    description: z.string({
        required_error: "Popis k autorovi nesmie byť prázdny"
    }),

    litPeriod: z.string({
        required_error: "Literárne obdobie nesmie byť prázdne"
    })
});

export type createAuthorType = z.infer<typeof createAuthorSchema>;