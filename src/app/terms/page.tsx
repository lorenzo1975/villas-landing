export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-6 py-24">
      <h1 className="text-4xl font-semibold text-foreground">Terms of Use</h1>
      <p className="text-sm text-muted-foreground">Effective: October 5, 2025</p>
      <section className="space-y-4 text-sm text-muted-foreground">
        <p>
          By accessing Villas.co.th you agree to these terms and to engage with honesty and professionalism. Villas.co.th provides verified villa listings, escrow facilitation, and partner onboarding support for Thailand properties.
        </p>
        <p>
          We do not act as a licensed real estate broker; all transactions are completed directly between buyers, renters, owners, and licensed third parties. Users are responsible for verifying any information provided outside the Villas.co.th due diligence process.
        </p>
        <p>
          Owners and partners agree to present accurate property information, respect exclusivity agreements, and comply with Thai regulations. Buyers and renters agree to share truthful identity and financial information.
        </p>
      </section>
      <section className="space-y-4 text-sm text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">Limitation of liability</h2>
        <p>
          Villas.co.th is not liable for losses arising from external services or inaccurate information submitted by partners. We limit liability to the amount paid for services rendered directly by Villas.co.th.
        </p>
      </section>
      <section className="space-y-4 text-sm text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
        <p>For questions about these terms, contact legal@villas.co.th.</p>
      </section>
    </div>
  );
}
