import { ProgramCard } from "@/components/cards";
import { ContentSection } from "@/components/content-section";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { programs } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Programs",
  description: "Explore weight loss, muscle gain, strength training, HIIT, CrossFit, and more.",
  path: "/programs",
  keywords: ["Fitness programs", "Weight loss program", "Muscle gain program"]
});

const programList = [
  ...programs,
  {
    name: "Functional Training",
    slug: "functional-training",
    description: "Movement-first coaching for better mobility and performance.",
    benefits: ["Mobility", "Balance", "Athleticism"],
    duration: "8 weeks",
    suitableFor: "All fitness levels",
    imageUrl: programs[0].imageUrl
  },
  {
    name: "HIIT",
    slug: "hiit",
    description: "High-intensity intervals for conditioning and calorie burn.",
    benefits: ["Fat loss", "Speed", "Conditioning"],
    duration: "6 weeks",
    suitableFor: "Time-conscious members",
    imageUrl: programs[1].imageUrl
  },
  {
    name: "Women's Fitness",
    slug: "womens-fitness",
    description: "Confidence-building sessions for strength, tone, and overall wellness.",
    benefits: ["Strength", "Tone", "Lifestyle support"],
    duration: "Ongoing",
    suitableFor: "Women of all ages",
    imageUrl: programs[2].imageUrl
  }
];

export default function ProgramsPage() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Programs" title="Training tracks for every goal and level." description="Pick a program built around your objective, timeline, and experience." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {programList.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>
      <ContentSection title="How programs work" description="You get assessment, a plan, progressive sessions, and check-ins.">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Assessment",
            "Program design",
            "Coached execution",
            "Progress review"
          ].map((step, index) => (
            <div key={step} className="glass rounded-[2rem] p-6">
              <p className="font-display text-3xl text-rose-300">0{index + 1}</p>
              <p className="mt-3 text-lg text-white">{step}</p>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageShell>
  );
}