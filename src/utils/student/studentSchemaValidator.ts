import { z } from "zod";

export const registerStudentSchema = z
  .object({
    name: z.string().min(1, "Name is required").max(30),
    lastName: z.string().min(1, "LastName is required").max(100),
    username: z.string().min(1, "Username is required").max(100),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have more than 8 characters"),
    role: z.string().min(1, "Role is required").max(30),
    classRoom: z.string().min(1, "Classroom is required").max(30)
});

export const loginStudentSchem = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});