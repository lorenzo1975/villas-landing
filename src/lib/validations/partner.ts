import { z } from "zod";

export const partnerSchema = z
  .object({
    name: z.string().min(2, "Let us know who we should speak with."),
    company: z.string().min(2, "Add your organisation or project name."),
    role: z.string().min(2, "Tell us your role."),
    email: z.string().email("Add a valid email."),
    phone: z
      .string()
      .regex(/^[+\d\s()-]{7,}$/u, {
        message: "Add a reachable phone or WhatsApp number."
      })
      .optional()
      .or(z.literal("")),
    region: z.string().min(2, "Which region are you focused on?"),
    timeline: z.string().optional(),
    message: z.string().max(800).optional(),
    consent: z
      .boolean()
      .refine((value) => value === true, {
        message: "Please confirm you agree to be contacted."
      })
  })
  .strict();

export type PartnerInput = z.infer<typeof partnerSchema>;
