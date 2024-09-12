import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = NextResponse.json({ success: true });

  // Clear the authentication cookie
  response.cookies.set("authenticated", "", { path: "/", maxAge: -1 });

  return response;
}
