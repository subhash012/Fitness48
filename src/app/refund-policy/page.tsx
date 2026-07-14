import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Refund Policy",
  description: "Fitness 48 refund policy.",
  path: "/refund-policy"
});

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy">
      <p>Refund eligibility depends on the membership plan, usage status, and business policy at the time of request.</p>
      <p className="mt-4">The final operational policy should be reviewed with the business owner before launch.</p>
    </LegalPage>
  );
}