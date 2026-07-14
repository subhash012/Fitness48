import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/button";
import { ContentSection } from "@/components/content-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { GalleryCard, PlanCard, ProgramCard, TestimonialCard } from "@/components/cards";
import { Hero } from "@/components/hero";
import { PageShell } from "@/components/page-shell";
import { StatGrid } from "@/components/stat-grid";
import { faqs, gallery, plans, programs, siteConfig, testimonials } from "@/data/site";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <section className="section-padding pt-0">
        <StatGrid />
      </section>

      <ContentSection
        title="Why choose Fitness 48"
        description="A premium gym experience designed around coaching quality, equipment, and long-term results."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Expert coaching", "Structured sessions, proper form correction, and goal tracking."],
            ["Premium facilities", "Modern machines, free weights, functional space, and clean interiors."],
            ["Transformation focus", "Weight loss, muscle gain, and personal training programs that convert." ]
          ].map(([title, description]) => (
            <div key={title} className="glass rounded-[2rem] p-6">
              <h3 className="font-display text-2xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Membership plans" description="Flexible options for students, families, beginners, and committed lifters.">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.slice(0, 3).map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button href="/membership" variant="secondary" className="gap-2">
            Compare all plans <ArrowRight size={16} />
          </Button>
        </div>
      </ContentSection>

      <ContentSection title="Programs built for outcomes" description="Specialized training tracks for specific goals and experience levels.">
        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Transformation stories" description="Real members, real results, and real accountability.">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Gallery preview" description="A glimpse into the environment, equipment, and energy inside the gym.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((item) => (
            <GalleryCard key={item.title} item={item} />
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Member reviews" description="Trust built through consistency, quality, and visible progress.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "The facility feels premium and the trainers actually follow up on progress.",
            "Best gym near Sarjapur Road for people who want results, not just workouts.",
            "Free trial was enough to convince me to sign up. Clean, structured, and serious."
          ].map((quote) => (
            <div key={quote} className="glass rounded-[2rem] p-6 text-white/75">
              {quote}
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="section-padding">
        <div className="container-width grid gap-6 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="glass rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-rose-300">Visit us</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Find Fitness 48 in Muthanallur.</h2>
            <p className="mt-4 max-w-2xl text-white/65">{siteConfig.address}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Contact Us</Button>
              <Button href="/free-trial" variant="secondary">
                Book Free Trial
              </Button>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-4">
            <div className="aspect-[4/3] rounded-[1.5rem] bg-white/5 p-6 text-white/70">
              <div className="flex h-full items-center justify-center rounded-[1.2rem] border border-dashed border-white/15 text-center">
                <div>
                  <MapPin className="mx-auto mb-3 text-rose-300" />
                  <p>Google Maps embed placeholder</p>
                  <p className="mt-2 text-sm">Connect the final Maps URL in the contact page configuration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContentSection title="FAQ" description="Short answers to the questions people ask before joining.">
        <FaqAccordion items={faqs} />
      </ContentSection>
    </PageShell>
  );
}