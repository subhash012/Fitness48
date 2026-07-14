"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/button";
import { trialBookingSchema, type TrialBookingInput } from "@/lib/validators";

const slots = ["6:00 AM - 8:00 AM", "8:00 AM - 10:00 AM", "5:00 PM - 7:00 PM", "7:00 PM - 9:00 PM"];

export function TrialForm() {
  const [pending, setPending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TrialBookingInput>({
    resolver: zodResolver(trialBookingSchema)
  });

  const onSubmit = handleSubmit(async (values) => {
    setPending(true);
    try {
      const response = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Trial booking failed");
      }

      toast.success("Trial booking submitted successfully");
      reset();
    } catch {
      toast.error("Unable to submit the trial booking right now");
    } finally {
      setPending(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input {...register("fullName")} className={inputClass} />
        </Field>
        <Field label="Phone Number" error={errors.phoneNumber?.message}>
          <input {...register("phoneNumber")} className={inputClass} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className={inputClass} />
        </Field>
        <Field label="Age" error={errors.age?.message as string | undefined}>
          <input {...register("age")} type="number" className={inputClass} />
        </Field>
        <Field label="Gender" error={errors.gender?.message}>
          <select {...register("gender")} className={inputClass}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field label="Fitness Goal" error={errors.fitnessGoal?.message}>
          <select {...register("fitnessGoal")} className={inputClass}>
            <option value="">Select goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Strength">Strength</option>
            <option value="General Fitness">General Fitness</option>
          </select>
        </Field>
      </div>

      <Field label="Preferred Time Slot" error={errors.preferredTimeSlot?.message}>
        <div className="grid gap-3 sm:grid-cols-2">
          {slots.map((slot) => (
            <label key={slot} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
              <input {...register("preferredTimeSlot")} type="radio" value={slot} className="accent-rose-500" />
              {slot}
            </label>
          ))}
        </div>
      </Field>

      <Button type="submit" className="mt-2 w-full" disabled={pending as boolean}>
        {pending ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="grid gap-2 text-sm text-white/75">
      <span>{label}</span>
      {children}
      {error ? <span className="text-xs text-rose-300">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20";