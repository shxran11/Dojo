import { z } from "zod";

export const ValidationSchema = z.object({
  title: z.string().min(1, "Task description is required.").max(255),
});
