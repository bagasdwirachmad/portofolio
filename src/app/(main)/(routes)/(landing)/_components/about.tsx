import React from "react";
import { Section } from "@/components/section";

export default function About() {
  return (
    <Section>
      <h3 className="text-xl font-semibold underline underline-offset-[6px] decoration-secondary decoration-[4px] mb-4">
        About
      </h3>
      <p className="text-muted-foreground text-justify">
        I&apos;m a graduate of Computer and Network Engineering from SMKN 1
        Pungging, currently exploring full-stack development. I have a solid
        fundation in networking, system administration, and{" "}
        <span className="text-foreground">Linux</span> environments.
      </p>
      <p className="text-muted-foreground mt-4 text-justify">
        I&apos;m passionate about building scalable and maintainable
        applications, as well as solving real-world problems with clean,
        efficient code.
      </p>
      <p className="text-muted-foreground mt-4 text-justify">
        Eager to continuously learn new technologies, I enjoy turning ideas into
        reliable, functional software from backend logic to polished frontend
        interfaces. Whether working independently or collaboratively in a team,
        I strive to push boundaries and bring technological visions to life.
      </p>
    </Section>
  );
}
