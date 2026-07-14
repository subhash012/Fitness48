import { ContentSection } from "@/components/content-section";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/cards";
import { testimonials } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Transformations",
  description: "Before and after stories, member success results, and video testimonial space.",
  path: "/transformations",
  keywords: ["Transformation stories", "Before and after gym", "Weight loss results"]
});

export default function TransformationsPage() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Transformations" title="Real progress, not marketing fluff." description="Member success stories that show body composition changes, strength gains, and confidence improvements." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>
      <ContentSection title="Before and after" description="The full version can pull media from Cloudinary and display comparison sliders.">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Member A: -11 kg in 90 days",
            "Member B: +4 kg lean muscle in 12 weeks"
          ].map((item) => (
            <div key={item} className="glass rounded-[2rem] p-6 text-white/75">{item}</div>
          ))}
        </div>
      </ContentSection>
    </PageShell>
  );
}