import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="container-width grid items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-5">
            <h1 className="font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Transform Your Body.
              <span className="block text-gradient">Transform Your Life.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
              Join Fitness 48 for expert coaching, world-class equipment, transformation-led programs, and a premium
              training experience designed for real results.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/free-trial" className="gap-2 text-base">
              Book Free Trial
              <ArrowRight size={18} />
            </Button>
            <Button href="/membership" variant="secondary" className="gap-2 text-base">
              <Play size={18} />
              View Membership Plans
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["500+", "Members"],
              ["9", "Programs"],
              ["100+", "Reviews"],
              ["6 AM-10 PM", "Daily Hours"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                <p className="font-display text-2xl text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-rose-500/20 blur-3xl" />
          <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-white/15 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80"
                alt="Premium gym equipment inside Fitness 48"
                width={1200}
                height={1400}
                className="h-[34rem] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}