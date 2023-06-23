import {z} from "zod";

export const createAdminSchema = z.object({
    name: z.string({
        required_error: "Meno nesmie byť prázdne"
    }),

    lastName: z.string({
        required_error: "Priezvisko nesmie byť prázdne"
    }),

    username: z.string({
        required_error: "Používateľské meno nesmie byť prázdne"
    }),

    email: z.string({
        required_error: "Email nesmie byť prázdny"
    }),

    password: z.string({
        required_error: "Heslo nesmie byť prázdne"
    })
});

export const loginAdminSchema = z.object({
    email: z.string({
        required_error: "Email nesmie byť prázdny"
    }),

    password: z.string({
        required_error: "Heslo nesmie byť prázdne"
    })
});

export type createAdminRegisterType = z.infer<typeof createAdminSchema>;
export type createAdminLoginType = z.infer<typeof loginAdminSchema>;