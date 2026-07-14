import Link from "next/link";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Programs", href: "/programs" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-conditions" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-width grid gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-2xl uppercase tracking-[0.2em] text-white">Fitness 48</p>
          <p className="text-sm leading-6 text-white/65">{siteConfig.description}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Quick Links</p>
          <div className="grid gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/75 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Contact</p>
          <div className="space-y-2 text-sm text-white/75">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Opening Hours</p>
          <p className="text-sm text-white/75">Mon - Sun: 6:00 AM - 10:00 PM</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/45">
        © {new Date().getFullYear()} Fitness 48. All rights reserved.
      </div>
    </footer>
  );
}