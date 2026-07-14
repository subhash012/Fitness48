import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Fitness 48 terms and conditions.",
  path: "/terms-conditions"
});

export default function TermsConditionsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      {"Membership use, trial bookings, and facility access are subject to standard gym rules, safety requirements, and booking availability.\n\nAny premium features, training services, or plan changes may be updated with prior notice as the business evolves."}
    </LegalPage>
  );
}