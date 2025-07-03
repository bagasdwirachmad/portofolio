"use client";

import React from "react";
import { Section } from "@/components/section";

export default function Favorite() {
  return (
    <Section>
      <h3 className="text-xl font-semibold underline underline-offset-[6px] decoration-secondary decoration-[4px] mb-4">
        I Love
      </h3>
      <p className="text-muted-foreground">Modding and experimenting with technology</p>
    </Section>
  );
}
