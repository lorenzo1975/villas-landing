import { z } from "zod";
import { getJoinContent } from "../content";

const joinContent = getJoinContent();
const roleOptions = joinContent.roles;

export const waitlistSchema = z
  .object({
    name: z.string().min(2, "Please share your name."),
    email: z.string().email("Add a valid email."),
    role: z
      .string()
      .refine((value) => roleOptions.includes(value as (typeof roleOptions)[number]), {
        message: "Select the role that fits best."
      }),
    message: z.string().max(500).optional(),
    consent: z
      .boolean()
      .refine((value) => value === true, {
        message: "Please confirm you agree to be contacted."
      })
  })
  .strict();

export type WaitlistInput = z.infer<typeof waitlistSchema>;
