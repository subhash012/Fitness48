import { z } from "zod";

export const trialBookingSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phoneNumber: z.string().min(8, "Phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  age: z.string().optional().or(z.literal("")),
  gender: z.string().optional().or(z.literal("")),
  fitnessGoal: z.string().min(2, "Choose a fitness goal"),
  preferredTimeSlot: z.string().min(2, "Select a time slot")
});

export const contactMessageSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phoneNumber: z.string().min(8, "Phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().min(10, "Message should be at least 10 characters")
});

export type TrialBookingInput = z.infer<typeof trialBookingSchema>;
export type ContactMessageInput = z.infer<typeof contactMessageSchema>;