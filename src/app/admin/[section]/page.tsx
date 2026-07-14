import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";

const sections: Record<string, { title: string; description: string }> = {
  "membership-plans": { title: "Manage Membership Plans", description: "Edit pricing, benefits, and highlights for each membership plan." },
  programs: { title: "Manage Programs", description: "Update training tracks, images, and goal descriptions." },
  gallery: { title: "Manage Gallery", description: "Upload and organize gym photos, equipment, events, and transformations." },
  transformations: { title: "Manage Transformations", description: "Maintain member results, stories, and testimonials." },
  submissions: { title: "View Submissions", description: "Review free trial bookings and contact messages." },
  faqs: { title: "Manage FAQs", description: "Control the public FAQ content and ordering." },
  "gym-information": { title: "Gym Information", description: "Update address, hours, phone, WhatsApp, and map details." }
};

export function generateMetadata({ params }: { params: { section: string } }) {
  const section = sections[params.section];
  return buildMetadata({ title: section?.title ?? "Admin Section", path: `/admin/${params.section}` });
}

export default function AdminSectionPage({ params }: { params: { section: string } }) {
  const section = sections[params.section];

  if (!section) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-rose-300">Admin Section</p>
        <h1 className="mt-3 font-display text-4xl text-white">{section.title}</h1>
        <p className="mt-3 max-w-2xl text-white/65">{section.description}</p>
      </div>
      <div className="glass rounded-[2rem] p-6 text-white/70">
        CRUD table, forms, upload actions, auth checks, and export controls plug in here.
      </div>
    </div>
  );
}