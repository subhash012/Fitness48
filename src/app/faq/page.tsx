import { FaqAccordion } from "@/components/faq-accordion";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Answers about memberships, parking, lockers, payments, timings, training, and diet guidance.",
  path: "/faq",
  keywords: ["Gym FAQ", "Fitness 48 questions", "Membership FAQ"]
});

export default function FaqPage() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Questions people ask before joining." description="Accordion layout for quick answers and better decision-making." />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}