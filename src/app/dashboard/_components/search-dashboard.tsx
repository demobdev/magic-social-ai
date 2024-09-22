"use client";

import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "All", value: "All" },
  { name: "Youtube", value: "Youtube" },
  { name: "Instagram", value: "Instagram" },
  { name: "Tiktok", value: "Tiktok" },
  { name: "Linkedin", value: "Linkedin" },
  { name: "Tweet", value: "Tweet" },
];

export const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-white rounded-3xl shadow-sm p-4">
        <div className="flex items-center p-3 border rounded-full bg-gray-100 mb-4">
          <SearchIcon className="text-gray-400 mr-2" />
          <Input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black border-none flex-grow placeholder-gray-400"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? "bg-[#E98206] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
