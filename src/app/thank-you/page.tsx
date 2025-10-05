import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ThankYouPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const sourceParam = params?.from;
  const source = Array.isArray(sourceParam) ? sourceParam[0] : sourceParam;

  const headline =
    source === "partner"
      ? "We will be in touch within 24 hours"
      : "You are on the Villas.co.th waitlist";

  const subtext =
    source === "partner"
      ? "Our partnerships team is reviewing your details and will reach out to co-create the best onboarding path."
      : "Expect a welcome email with first-look villas, launch milestones, and concierge access very soon.";

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold text-foreground">{headline}</h1>
      <p className="text-lg text-muted-foreground">{subtext}</p>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>Follow our journey while you wait:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://instagram.com/villas.co.th" className="underline-offset-4 hover:underline">
            Instagram
          </Link>
          <Link href="https://www.linkedin.com/company/villas-th" className="underline-offset-4 hover:underline">
            LinkedIn
          </Link>
          <Link href="mailto:hello@villas.co.th" className="underline-offset-4 hover:underline">
            hello@villas.co.th
          </Link>
        </div>
      </div>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
