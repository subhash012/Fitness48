import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/button";
import { cn, formatPrice } from "@/lib/utils";
import type { GalleryItem, Plan, Program, Testimonial } from "@/types/site";

export function PlanCard({ plan }: { plan: Plan }) {
  const priceValue = Number.parseInt(plan.price.replace(/[^\d]/g, ""), 10);

  return (
    <div className={cn("glass relative rounded-[2rem] p-6", plan.highlight && "border-rose-500/40 bg-rose-500/10") }>
      {plan.highlight ? (
        <span className="mb-4 inline-flex rounded-full border border-rose-400/30 bg-rose-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-rose-200">
          Recommended
        </span>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-2xl text-white">{plan.name}</p>
          <p className="mt-1 text-sm text-white/55">{plan.duration}</p>
        </div>
        <p className="font-display text-3xl text-white">{priceValue ? formatPrice(priceValue) : plan.price}</p>
      </div>
      <ul className="mt-6 space-y-3">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-3 text-sm text-white/75">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-300">
              <Check size={13} />
            </span>
            {benefit}
          </li>
        ))}
      </ul>
      <Button href="/free-trial" variant={plan.highlight ? "primary" : "secondary"} className="mt-6 w-full">
        Join Now
      </Button>
    </div>
  );
}

export function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="glass overflow-hidden rounded-[2rem]">
      <Image src={program.imageUrl} alt={program.name} width={1000} height={700} className="h-56 w-full object-cover" />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl text-white">{program.name}</h3>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/55">
            {program.duration}
          </span>
        </div>
        <p className="text-sm leading-6 text-white/65">{program.description}</p>
        <div className="space-y-2">
          {program.benefits.map((benefit) => (
            <p key={benefit} className="flex items-center gap-3 text-sm text-white/75">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              {benefit}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4 text-sm text-white/60">
          <span>{program.suitableFor}</span>
          <Link href="/free-trial" className="inline-flex items-center gap-1 text-rose-300 hover:text-rose-200">
            Enquire
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="glass overflow-hidden rounded-[2rem]">
      <Image src={item.imageUrl} alt={item.title} width={1000} height={1200} className="h-80 w-full object-cover" />
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-rose-300">{item.category}</p>
        <p className="mt-2 text-lg font-medium text-white">{item.title}</p>
      </div>
    </div>
  );
}

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="glass rounded-[2rem] p-6">
      <p className="text-sm uppercase tracking-[0.3em] text-rose-300">{item.result}</p>
      <p className="mt-4 text-lg leading-8 text-white/80">“{item.quote}”</p>
      <p className="mt-6 font-semibold text-white">{item.name}</p>
    </div>
  );
}