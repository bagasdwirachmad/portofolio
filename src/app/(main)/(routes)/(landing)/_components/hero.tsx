import React from "react";
import Image from "next/image";
import { Section } from "@/components/section";
export default function Hero() {
  return (
    <Section>
      <div className="md:flex">
        <div>
          <h1 className="text-2xl font-bold">Bagas Dwi Rachmad Roziqin</h1>
          <p>Ctrl + Shift + N: Start something new Every line counts</p>
        </div>

        <div className="flex-shrink-0 mt-4 md:ml-14 md:mt-0 text-center ">
          <div className="border-2 border-foreground w-[100px] h-[100px] inline-block rounded-full overflow-hidden ">
            <Image
              src="/bagas.jpg"
              alt="profile image"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
