import {z} from "zod";

export const registerTeacherSchema = z.object({
    name: z.string({
        required_error: "Meno nesmie byť prádzne"
    }),
    lastName: z.string({
        required_error: "Priezvisko nesmie byť prázdne"
    }),

    username: z.string({
        required_error: "Používateľské meno nesmie byť prázdne"
    }),

    email: z.string({
        required_error: "Email nesmie byť prádzne"
    }),

    password: z.string({
        required_error: "Heslo nesmie byť prádzne"
    }),

    role: z.string({
        required_error: "Rola nesmie byť prádzna"
    })
});

export const loginTeacherSchema = z.object({
    email: z.string({
        required_error: "Email nesmie byť prádzne"
    }),

    password: z.string({
        required_error: "Heslo nesmie byť prádzne"
    }),
})

export type createLoginTeacherType = z.infer<typeof loginTeacherSchema>;
export type createRegisterTeacherType = z.infer<typeof registerTeacherSchema>;