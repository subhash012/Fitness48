import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { Button } from "@/components/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="container-width flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-white shadow-glow">
            48
          </div>
          <div>
            <p className="font-display text-lg uppercase tracking-[0.2em] text-white">Fitness 48</p>
            <p className="text-xs text-white/55">Muthanallur, Sarjapur Road</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/75 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} variant="secondary" className="gap-2">
            <Phone size={16} />
            Call Now
          </Button>
          <Button href="/free-trial">Join Now</Button>
        </div>

        <details className="group lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-white/15 bg-white/5 p-3 text-white">
            <Menu size={20} />
          </summary>
          <div className="absolute right-4 mt-3 w-[calc(100vw-2rem)] max-w-sm rounded-3xl border border-white/10 bg-black/95 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-white/85 hover:bg-white/5">
                  {item.label}
                </Link>
              ))}
              <Button href="/free-trial" className="mt-2">
                Book Free Trial
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}