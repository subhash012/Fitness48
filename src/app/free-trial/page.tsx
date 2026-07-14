import { TrialForm } from "@/components/trial-form";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book Free Trial",
  description: "Book a free trial at Fitness 48 with a validated form and success flow.",
  path: "/free-trial",
  keywords: ["Free trial gym", "Book gym trial", "Fitness 48 trial"]
});

export default function FreeTrialPage() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-width grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Free Trial" title="Experience the gym before you join." description="Share a few details and we’ll schedule your first visit." />
            <div className="mt-8 space-y-4 text-white/70">
              <p>Full Name, phone number, email, age, gender, goal, and preferred slot are collected securely.</p>
              <p>Submissions are validated on the client and server and stored for later follow-up and export.</p>
            </div>
          </div>
          <TrialForm />
        </div>
      </section>
    </PageShell>
  );
}