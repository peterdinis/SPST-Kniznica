import { z } from "zod";

export const registerStudentSchema = z.object({
  name: z.string().min(1, "Meno je povinné").max(30),
  lastName: z.string().min(1, "Priezvisko je povinné").max(100),
  username: z.string().min(1, "Používateľské meno je povinné").max(100),
  email: z.string().email("Invalid email").min(1, "Email je povinný"),
  password: z
    .string()
    .min(1, "Heslo je povinné")
    .min(8, "Heslo musí mať viac ako 8 znakov"),
  role: z.string().min(1, "Rola je povinná").max(30),
  classRoom: z.string().min(1, "Trieda je povinná").max(30),
});

export const loginStudentSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email je povinný"),
  password: z
    .string()
    .min(1, "Heslo je povinné")
    .min(8, "Heslo musí mať viac ako 8 znakov"),
});

export type createStudentRegisterType = z.infer<typeof registerStudentSchema>;
export type createStudentLoginType = z.infer<typeof loginStudentSchema>;