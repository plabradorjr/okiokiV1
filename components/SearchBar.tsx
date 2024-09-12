"use client"; // Ensure this is a client component

import React, { useState } from "react";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setQuery(""); // Clear the search box
      onSearch(" ");
    } else {
      onSearch(query);
      // Scroll to the top of the page on mobile
      // if (window.innerWidth <= 768 && query.trim().length > 1) {
      //   window.scrollTo({ top: 0, behavior: "smooth" });
      // }
    }
  };

  return (
    <div className="w-full max-w-sm relative">
      <form
        className="flex w-full items-center space-x-2"
        onSubmit={handleSubmit}
      >
        <Input
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow border-primary text-lg"
        />
        <Button type="submit" size="icon" className="btn btn-icon">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
    </div>
  );
}
