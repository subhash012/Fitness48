import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({ href, children, variant = "primary", className, type = "button", disabled }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black";
  const variants = {
    primary: "bg-accent text-white shadow-[0_10px_30px_rgba(225,29,72,0.28)] hover:-translate-y-0.5 hover:bg-rose-600",
    secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    ghost: "text-white/80 hover:text-white hover:bg-white/5"
  };

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={cn(base, variants[variant], className)}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={cn(base, variants[variant], disabled && "cursor-not-allowed opacity-60", className)}>
      {children}
    </button>
  );
}