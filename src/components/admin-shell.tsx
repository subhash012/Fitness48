import type { ReactNode } from "react";
import Link from "next/link";
import { BarChart3, Dumbbell, GalleryHorizontal, MessagesSquare, Settings, Star, UserCheck } from "lucide-react";
import { Button } from "@/components/button";

const adminNav = [
  { label: "Dashboard", href: "/admin", icon: BarChart3 },
  { label: "Membership Plans", href: "/admin/membership-plans", icon: Dumbbell },
  { label: "Programs", href: "/admin/programs", icon: Dumbbell },
  { label: "Gallery", href: "/admin/gallery", icon: GalleryHorizontal },
  { label: "Transformations", href: "/admin/transformations", icon: Star },
  { label: "Submissions", href: "/admin/submissions", icon: MessagesSquare },
  { label: "FAQs", href: "/admin/faqs", icon: Settings },
  { label: "Gym Info", href: "/admin/gym-information", icon: UserCheck }
];

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="border-b border-white/10 bg-white/5 p-6 lg:min-h-screen lg:border-b-0 lg:border-r">
        <p className="font-display text-2xl uppercase tracking-[0.25em]">Fitness 48 Admin</p>
        <nav className="mt-8 grid gap-2">
          {adminNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-white/75 hover:bg-white/8 hover:text-white">
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="p-6 sm:p-8 lg:p-10">{children}</main>
    </div>
  );
}