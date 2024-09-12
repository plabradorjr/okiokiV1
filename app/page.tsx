"use client"; // This marks the component as a Client Component

import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CsvParser from "../components/CsvParser";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Made By: Pancho Labrador Jr.");
  console.log("https://pancho.lol");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen-minus-110 bg-background p-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-500">
        Inventory Finder
      </h1>
      <SearchBar onSearch={handleSearch} />
      <CsvParser searchQuery={searchQuery} />
    </div>
  );
}
