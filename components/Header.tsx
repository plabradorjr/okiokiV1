"use client";

import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  // Handle logout by clearing the cookie and redirecting to login page
  const handleLogout = () => {
    Cookies.remove("authenticated");
    logout();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <div className="overflow-hidden rounded-full">
              <Image
                src="/Pudgy442.png"
                alt="OkiOki logo"
                width={50}
                height={50}
                className="h-10 w-10 object-cover"
              />
            </div>
            <span className="font-bold text-lg">OkiOki</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/maps" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Map className="h-4 w-4" />
              <span className="sr-only">Open map</span>
            </Button>
          </Link>

          {isAuthenticated && (
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
