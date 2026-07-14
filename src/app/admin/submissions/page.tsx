import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Submissions",
  description: "View and export free trial bookings and contact messages.",
  path: "/admin/submissions"
});

export default function AdminSubmissionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-rose-300">Submissions</p>
        <h1 className="mt-3 font-display text-4xl text-white">Leads and bookings</h1>
        <p className="mt-3 max-w-2xl text-white/65">Review incoming form data and export it later to CSV for CRM follow-up.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/api/admin/export?model=trials" className="glass rounded-[2rem] p-6 text-white hover:bg-white/10">
          Export trial bookings
        </Link>
        <Link href="/api/admin/export?model=contact" className="glass rounded-[2rem] p-6 text-white hover:bg-white/10">
          Export contact messages
        </Link>
      </div>
      <div className="glass rounded-[2rem] p-6 text-white/70">
        Connect this page to Prisma queries and table filters to manage bookings directly from the dashboard.
      </div>
    </div>
  );
}