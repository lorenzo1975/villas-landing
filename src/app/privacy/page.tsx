export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-6 py-24">
      <h1 className="text-4xl font-semibold text-foreground">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Last updated: October 5, 2025</p>
      <section className="space-y-4 text-sm text-muted-foreground">
        <p>
          Villas.co.th collects personal data to power our villa marketplace, operate concierge services, and communicate important updates. We respect your privacy and only gather information required to provide our services.
        </p>
        <p>
          We store contact details, preferences, and communications for buyers, renters, and partners who join our waitlist or onboarding programs. Data is retained securely with access restricted to the Villas.co.th core team and trusted legal or compliance partners.
        </p>
        <p>
          You may request data access or deletion at any time by emailing privacy@villas.co.th. We respond within 30 days in line with Thailand PDPA requirements.
        </p>
      </section>
      <section className="space-y-4 text-sm text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">Cookies & analytics</h2>
        <p>
          We use essential cookies to ensure site functionality and optional analytics to improve performance. Analytics runs only after you consent via the cookie banner. You can withdraw consent by contacting us.
        </p>
      </section>
      <section className="space-y-4 text-sm text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
        <p>Questions about this policy? Reach out to privacy@villas.co.th or call +66 (0)2 123 4567.</p>
      </section>
    </div>
  );
}
