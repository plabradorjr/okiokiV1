import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  // Compare the entered password with the environment variable
  if (password === process.env.PASSWORD) {
    // Set a cookie or session to indicate the user is authenticated
    const response = NextResponse.json({ success: true });
    response.cookies.set("authenticated", "true", {
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    return response;
  } else {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
}
