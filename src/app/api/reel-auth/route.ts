import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const correctPassword = process.env.REEL_PASSWORD || "reel2026";

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("reel_access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get("reel_access");
  return NextResponse.json({ authenticated: cookie?.value === "granted" });
}
