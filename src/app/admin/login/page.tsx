"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { Button } from "@/components/button";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      router.push("/admin");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <form onSubmit={handleSubmit} className="glass w-full max-w-md rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-300">Admin Access</p>
        <h1 className="mt-3 font-display text-4xl">Login</h1>
        <label className="mt-8 grid gap-2 text-sm text-white/75">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20"
          />
        </label>
        <Button type="submit" className="mt-6 w-full" disabled={pending}>
          {pending ? "Signing in..." : "Enter Dashboard"}
        </Button>
      </form>
    </div>
  );
}