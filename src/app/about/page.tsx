import { HeartHandshake, Trophy, Users, Dumbbell } from "lucide-react";
import { ContentSection } from "@/components/content-section";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Fitness 48",
  description: "Learn the story, mission, vision, and facilities behind Fitness 48.",
  path: "/about",
  keywords: ["About Fitness 48", "Gym story", "Fitness center Bangalore"]
});

const highlights = [
  { title: "Our Story", text: "Built to bring premium training culture to Muthanallur and the Sarjapur Road community.", icon: HeartHandshake },
  { title: "Mission", text: "Help people train with purpose, build confidence, and stay consistent long enough to see results.", icon: Users },
  { title: "Vision", text: "Become the most trusted transformation-focused gym in the area.", icon: Trophy },
  { title: "Facilities", text: "Strength floor, cardio equipment, functional area, and recovery-friendly training zones.", icon: Dumbbell }
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="About" title="A premium gym experience built around transformation." description="Fitness 48 is designed for people who want structure, coaching, and a serious training environment." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass rounded-[2rem] p-6">
                  <Icon className="text-rose-300" />
                  <h3 className="mt-4 font-display text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 text-white/65">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ContentSection title="Achievements" description="A culture of results, referrals, and repeat progress.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "High member retention driven by coaching quality",
            "Strong local reputation near Sarjapur Road",
            "Consistent transformation stories across age groups"
          ].map((item) => (
            <div key={item} className="glass rounded-[2rem] p-6 text-white/75">
              {item}
            </div>
          ))}
        </div>
      </ContentSection>
    </PageShell>
  );
}