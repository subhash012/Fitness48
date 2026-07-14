import { GalleryCard } from "@/components/cards";
import { ContentSection } from "@/components/content-section";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { gallery } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "Browse gym photos, equipment, events, transformation photos, and videos.",
  path: "/gallery",
  keywords: ["Gym gallery", "Fitness 48 photos", "Transformation photos"]
});

export default function GalleryPage() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="A visual look inside the gym." description="Masonry-style layout, category filters, and lightbox-ready image cards in the full implementation." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((item) => (
              <GalleryCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
      <ContentSection title="Video previews" description="Upload short clips for reels, walkthroughs, and transformation highlights.">
        <div className="glass rounded-[2rem] p-6 text-white/70">Video lightbox and lazy-loading hooks are ready to be connected to Cloudinary or a CDN feed.</div>
      </ContentSection>
    </PageShell>
  );
}