import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Dashboard",
  description: "Manage Fitness 48 plans, gallery, programs, transformations, and submissions.",
  path: "/admin"
});

const cards = [
  ["Membership Plans", "6 plans ready for editing"],
  ["Programs", "9 training programs"],
  ["Gallery", "Masonry uploads and filters"],
  ["Transformations", "Before/after stories"],
  ["Submissions", "Free trial and contact leads"],
  ["FAQs", "Quick content management"]
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-rose-300">Admin</p>
        <h1 className="mt-3 font-display text-4xl text-white">Fitness 48 Dashboard</h1>
        <p className="mt-3 max-w-2xl text-white/65">Authenticated dashboard scaffold for managing gym content and lead submissions.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(([title, description]) => (
          <div key={title} className="glass rounded-[2rem] p-6">
            <h2 className="font-display text-2xl text-white">{title}</h2>
            <p className="mt-3 text-white/65">{description}</p>
          </div>
        ))}
      </div>
      <div className="glass rounded-[2rem] p-6 text-white/70">
        Use the section routes under <span className="text-white">/admin/*</span> to wire CRUD actions and export tools.
      </div>
    </div>
  );
}