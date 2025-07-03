import { Metadata } from "next";
import { Section } from "@/components/section";
import { Card } from "./_components/card";
import { works } from "@/data/work";

export const metadata: Metadata = {
  title: "Work & Experience - @bagasdwi",
  description: "Work & Experience - Web Portfolio Bagas Dwi Rachmad Roziqin",
};
export default function Works() {
  return (
    <div className="px-4 relative isolate min-h-screen max-w-[60ch] mx-auto">
      <Section>
        <h3 className="text-xl font-semibold underline underline-offset-[6px] decoration-secondary decoration-[4px] mb-4">
          Work & Experience
        </h3>
      </Section>
    <div className="space-y-6 mb-9">
        {works.map((work) => (
          <Card
            key={work.id}
            title={work.title}
            company={work.company}
            period={work.period}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
}
