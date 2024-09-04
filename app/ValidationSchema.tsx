import { z } from "zod";

export const ValidationSchema = z.object({
  title: z.string().min(1, "Task description is required.").max(255),
  category: z.string().optional(),
});

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("Email is not valid."),
  password: z.string().min(1, "Please enter your password."),
});
