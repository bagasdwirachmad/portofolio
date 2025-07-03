import React from "react";
import { Section } from "@/components/section";

export default function Socials() {
  return (
    <Section>
      <h3 className="text-xl font-semibold underline underline-offset-[6px] decoration-secondary decoration-[4px] mb-4">
        Connect via CLI
      </h3>
      <h3 className="font-semibold font-mono mb-4">bagas@web:~$ links</h3>

      <ul className="flex flex-col gap-2 font-mono text-muted-foreground">
        <li>
          <a
            href="https://github.com/bagasdwirachmad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            [GitHub] github.com/bagasdwirachmad
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/bagasdwirachmad/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            [LinkedIn] linkedin.com/in/bagasdwirachmad
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/_dwiiiwoiii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            [Instagram] instagram.com/_dwiiiwoiii
          </a>
        </li>
      </ul>
    </Section>
  );
}
