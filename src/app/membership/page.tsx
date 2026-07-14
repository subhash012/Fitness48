import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/button";
import { ContentSection } from "@/components/content-section";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { plans } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Membership Plans",
  description: "Monthly, quarterly, half-yearly, annual, student, and family plans for Fitness 48.",
  path: "/membership",
  keywords: ["Membership plans", "Gym pricing", "Fitness 48 membership"]
});

export default function MembershipPage() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Membership" title="Choose the plan that matches your commitment." description="Every plan includes access to a premium training environment and a path toward visible progress." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={cn("glass rounded-[2rem] p-6", plan.highlight && "border-rose-500/35 bg-rose-500/10")}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl text-white">{plan.name}</p>
                    <p className="mt-1 text-sm text-white/55">{plan.duration}</p>
                  </div>
                  <p className="font-display text-3xl text-white">{plan.price}</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-white/75">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-300">
                        <Check size={13} />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button href="/free-trial" variant={plan.highlight ? "primary" : "secondary"} className="mt-6 w-full gap-2">
                  Join Now <ArrowRight size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContentSection title="Compare plans" description="Longer plans offer better value and better consistency for results.">
        <div className="glass overflow-hidden rounded-[2rem]">
          <div className="grid grid-cols-4 border-b border-white/10 px-6 py-4 text-sm text-white/60">
            <span>Plan</span>
            <span>Duration</span>
            <span>Best for</span>
            <span>Highlight</span>
          </div>
          {plans.map((plan) => (
            <div key={plan.name} className="grid grid-cols-4 gap-4 border-b border-white/10 px-6 py-4 text-sm text-white/80 last:border-0">
              <span>{plan.name}</span>
              <span>{plan.duration}</span>
              <span>{plan.benefits[0]}</span>
              <span>{plan.highlight ? "Recommended" : "Standard"}</span>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageShell>
  );
}