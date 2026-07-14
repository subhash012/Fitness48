import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Fitness 48",
  description: "Get in touch with Fitness 48 by phone, email, WhatsApp, or contact form.",
  path: "/contact",
  keywords: ["Contact gym", "Fitness 48 contact", "WhatsApp gym Bangalore"]
});

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-width grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Contact" title="Talk to the team." description="Call, email, or send a message and we’ll respond quickly." />
            <div className="mt-8 grid gap-4">
              {[
                [MapPin, siteConfig.address],
                [Phone, siteConfig.phone],
                [Mail, siteConfig.email],
                [MessageCircle, `WhatsApp: ${siteConfig.phone}`]
              ].map(([Icon, text]) => (
                <div key={String(text)} className="glass flex items-center gap-4 rounded-3xl p-5 text-white/75">
                  <Icon className="text-rose-300" />
                  <span>{text as string}</span>
                </div>
              ))}
            </div>
            <div className="glass mt-6 rounded-[2rem] p-6 text-white/70">
              Google Map embed: <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="text-rose-300 underline">open location</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}