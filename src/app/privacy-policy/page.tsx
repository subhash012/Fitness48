import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Fitness 48 privacy policy.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>We collect contact and trial booking details only for gym communication, follow-up, and service delivery.</p>
      <p className="mt-4">Data is processed securely, limited to business use, and protected through environment-based secrets and database controls.</p>
    </LegalPage>
  );
}