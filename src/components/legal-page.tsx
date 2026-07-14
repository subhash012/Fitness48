import type { ReactNode } from "react";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";

export function LegalPage({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <SectionHeading title={title} eyebrow="Legal" />
          <div className="glass mt-10 rounded-[2rem] p-6 text-white/72 sm:p-8">{children ?? null}</div>
        </div>
      </section>
    </PageShell>
  );
}