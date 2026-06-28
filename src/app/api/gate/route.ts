import { NextResponse } from "next/server";

const ONE_YEAR = 60 * 60 * 24 * 365;

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = (formData.get("email") as string | null)?.trim().toLowerCase();
  const next = (formData.get("next") as string | null) || "/";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const url = new URL(request.url);
    url.pathname = "/gate";
    url.searchParams.set("next", next);
    url.searchParams.set("error", "1");
    return NextResponse.redirect(url, { status: 303 });
  }

  // notify owner — requires RESEND_API_KEY env var
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "gate@resend.dev",
        to: "bathomakgau4@gmail.com",
        subject: `bnm site — new visitor: ${email}`,
        text: `Email collected from gate: ${email}\n\nTimestamp: ${new Date().toISOString()}`,
      }),
    }).catch(() => {
      // non-fatal — gate still opens even if notification fails
    });
  }

  const dest = next.startsWith("/") ? next : "/";
  const response = NextResponse.redirect(new URL(dest, request.url), {
    status: 303,
  });
  response.cookies.set("bnm_gate", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: ONE_YEAR,
    path: "/",
  });
  return response;
}
