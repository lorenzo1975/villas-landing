import { NextResponse } from "next/server";

import { track } from "@/lib/analytics";
import { getJoinContent } from "@/lib/content";
import { partnerSchema } from "@/lib/validations/partner";
import { waitlistSchema } from "@/lib/validations/waitlist";

type LeadPayload =
  | {
      type: "waitlist";
      data: unknown;
    }
  | {
      type: "partner";
      data: unknown;
    };

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;

    if (!payload?.type) {
      return NextResponse.json({ error: "Missing lead type" }, { status: 400 });
    }

    if (payload.type === "waitlist") {
      const data = waitlistSchema.parse(payload.data);
      console.info("[lead:waitlist]", data);
      track({ name: "waitlist_server_received", payload: { role: data.role } });
    }

    if (payload.type === "partner") {
      const data = partnerSchema.parse(payload.data);
      console.info("[lead:partner]", data);
      track({ name: "partner_server_received", payload: { region: data.region } });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead:error]", error);
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }
}

export function GET() {
  const join = getJoinContent();
  return NextResponse.json({
    message: "Lead capture endpoint. Submit POST requests with type and data fields.",
    roles: join.roles
  });
}
