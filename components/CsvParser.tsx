"use client";

import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import CardComponent from "./CardComponent";
import csvData from "../data/data.csv"; // Adjust the path based on your folder structure

interface DataObject {
  peopleSoftNumber: string;
  referenceNumber: string;
  referenceNumberLessSpecialChars: string;
  itemDescription: string;
  mfgName: string;
  area: string;
  lev1: string;
  cartName: string;
  shelf: string;
  unspscDescription: string;
  statusCurrent: string;
  comments: string;
}

interface CsvParserProps {
  searchQuery: string;
}

export default function CsvParser({ searchQuery }: CsvParserProps) {
  const [parsedData, setParsedData] = useState<DataObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parseCSVData = () => {
      try {
        const result = Papa.parse<DataObject>(csvData, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => {
            // Clean up the header names to make them more suitable for keys
            switch (header.trim()) {
              case "PeopleSoft #":
                return "peopleSoftNumber";
              case "Reference #":
                return "referenceNumber";
              case "Reference #\n(less special characters)":
                return "referenceNumberLessSpecialChars";
              case "Item Description":
                return "itemDescription";
              case "Mfg Name":
                return "mfgName";
              case "Area":
                return "area";
              case "Lev 1":
                return "lev1";
              case "Cart Name":
                return "cartName";
              case "Shelf":
                return "shelf";
              case "UNSPSC Desc (Commodity Code)":
                return "unspscDescription";
              case "Status Current":
                return "statusCurrent";
              case "Comments":
                return "comments";
              default:
                return header;
            }
          },
        });
        setParsedData(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error parsing CSV file:", error);
        setLoading(false);
      }
    };

    parseCSVData();
  }, []);

  const filteredData = parsedData.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // If there's no search query, do not render anything
  if (!searchQuery) return null;

  if (searchQuery.toLowerCase().trim() === "weenis") {
    return (
      <div
        className="m-2"
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
          src="https://media.giphy.com/media/11mwI67GLeMvgA/giphy.gif"
          width={360} // Double the original width
          height={360} // Double the original height
          style={{ objectFit: "cover", transform: "scale(1.7)" }} // Zoom in by scaling
          alt="GIF"
        />
      </div>
    );
  }

  if (!searchQuery.trim())
    return (
      <p className="text-xs m-2 text-gray-400">
        Cannot search for empty query. Try again.
      </p>
    );

  if (searchQuery.trim().length === 1) {
    return (
      <p className="text-xs m-2 text-gray-400">
        Enter more characters pwetty pwease
      </p>
    );
  }

  if (filteredData.length === 0) {
    return <p className="text-sm m-2 text-red-500">No results found.</p>;
  }

  if (filteredData.length > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (/^0+$/.test(searchQuery.trim())) {
    return (
      <>
        <p className="text-xs mt-2 text-gray-400">All zeroes? Sad lyfe.</p>
        <p className="text-xs text-gray-400">Please try again senpai.</p>
      </>
    );
  }

  return (
    <div>
      <p className="text-xs m-2 text-gray-400">
        Search Results: {filteredData.length}
      </p>

      {filteredData.map((item, index) => (
        <CardComponent
          key={index}
          refNumber={item.referenceNumber}
          peopleSoftNumber={item.peopleSoftNumber}
          status={item.statusCurrent}
          cartName={item.cartName}
          manufacturer={item.mfgName}
          shelf={item.shelf}
          description={item.unspscDescription} // Assuming you want this as the description
          comments={item.comments.split("\n")} // Assuming comments are separated by new lines
          itemTitle={item.itemDescription} // Set itemDescription as the title of the card
        />
      ))}
    </div>
  );
}
