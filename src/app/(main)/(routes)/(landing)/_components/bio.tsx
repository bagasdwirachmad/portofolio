"use client";

import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import React from "react";

type BioItem = {
  year: string;
  description: string;
};

const bioData: BioItem[] = [
  {
    year: "2006",
    description: "Born in Mojokerto, Indonesia",
  },
  {
    year: "2024",
    description:
      "Graduated from SMKN 1 Pungging (Computer and Network Engineering)",
  },
  {
    year: "2024",
    description: "Started diving into fullstack development",
  },
  {
    year: "2025",
    description: "Started exploring IT Security",
  },
];

export default function Bio() {
  return (
    <Section>
      <h3 className="text-xl font-semibold underline underline-offset-[6px] decoration-secondary decoration-[4px] mb-4">
        Bio
      </h3>

      {bioData.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex gap-2", 
            index === bioData.length - 1
              ? "text-fuchsia-500"
              : "text-muted-foreground"
          )}
        >
          <span
            className={cn(
              "font-bold w-14 flex-shrink-0",
              index === bioData.length - 1
                ? "text-fuchsia-500"
                : "text-foreground/90"
            )}
          >
            {item.year}
          </span>
          <span>{item.description}</span>
        </div>
      ))}
    </Section>
  );
}
