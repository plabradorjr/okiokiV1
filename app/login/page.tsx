"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { log } from "console";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send the password to the backend API
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      // If the password is correct, redirect to the home page
      login();
      router.push("/");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen-minus-110">
      <div
        className="mt-10"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height: 180,
          width: 180,
        }}
      >
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExamVsbnkxeGg1YXl3cTVvc2g0MnpjYjQ5YmhyajQ4MThsODN3eHN4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y2prQiIhEM5ZGlehO7/giphy.gif"
          width={180} // Double the original width
          height={180} // Double the original height
          style={{ objectFit: "cover", transform: "scale(1.3)" }} // Zoom in by scaling
          alt="GIF"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-md"
      >
        <h1 className="text-sm mb-4 text-orange-500">
          Not available for general public use
        </h1>
        <h1 className="text-2xl font-bold mb-4">Enter Password For Access</h1>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Password"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Submit
        </button>
        <h1 className="text-xs mt-3 text-gray-300">
          By continuing, you agree to our {""}
          <Link className="underline" href={"/terms"}>
            Terms of Use
          </Link>
        </h1>
      </form>
    </div>
  );
}
