import { z } from "zod";

export const pilotRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is required")
    .max(150, "Full name is too long"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),

  company: z
    .string()
    .trim()
    .min(2, "Company name is required")
    .max(200, "Company name is too long"),

  useCase: z
    .string()
    .trim()
    .min(1, "Please select a use case")
    .max(100, "Use case is too long"),

  goals: z
    .string()
    .trim()
    .max(5000, "Goals are too long")
    .optional()
    .or(z.literal("")),
});

export type PilotRequestInput = z.infer<typeof pilotRequestSchema>;