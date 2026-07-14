"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/button";
import { contactMessageSchema, type ContactMessageInput } from "@/lib/validators";

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactMessageInput>({
    resolver: zodResolver(contactMessageSchema)
  });

  const onSubmit = handleSubmit(async (values) => {
    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Contact submission failed");
      }

      toast.success("Message sent successfully");
      reset();
    } catch {
      toast.error("Unable to send your message right now");
    } finally {
      setPending(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="glass grid gap-4 rounded-[2rem] p-6 sm:p-8">
      <Field label="Full Name" error={errors.fullName?.message}>
        <input {...register("fullName")} className={inputClass} />
      </Field>
      <Field label="Phone Number" error={errors.phoneNumber?.message}>
        <input {...register("phoneNumber")} className={inputClass} />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input {...register("email")} type="email" className={inputClass} />
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea {...register("message")} rows={5} className={`${inputClass} resize-none`} />
      </Field>
      <Button type="submit" className="mt-2 w-full" disabled={pending as boolean}>
        {pending ? "Sending..." : "Send Message"}
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