import { z } from "zod";

export const ASSESSMENT_STATUSES = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "CONVERTED",
  "CLOSED",
] as const;

export const assessmentSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name is required.")
    .max(120, "Full name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid business email.")
    .max(254, "Email address is too long."),

  company: z
    .string()
    .trim()
    .min(2, "Company name is required.")
    .max(160, "Company name is too long."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long."),

  industry: z
    .string()
    .trim()
    .min(1, "Industry is required.")
    .max(100, "Industry is too long."),

  companySize: z
    .string()
    .trim()
    .min(1, "Company size is required.")
    .max(50, "Company size is too long."),

  goals: z
    .string()
    .trim()
    .min(1, "Business goals are required.")
    .max(5000, "Business goals are too long."),
});

export type AssessmentInput = z.infer<typeof assessmentSchema>;

export const assessmentStatusSchema = z.enum(ASSESSMENT_STATUSES);

export type AssessmentStatus = z.infer<
  typeof assessmentStatusSchema
>;