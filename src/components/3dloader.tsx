"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model as SmolAme } from "./3d";

export default function SmolAmeLoader() {
  return (
    <div className=" m-auto relative -mt-5 sm:-mt-[60px] md:-mt-[120px] -mb-10 sm:-mb-[140px] md:-mb-[200px] w-[280px] sm:w-[480px] md:w-[640px] h-[280px] sm:h-[480px] md:h-[640px] flex items-center justify-center ">
      <Canvas camera={{ position: [0, 1.5, 10], fov: 45 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} intensity={1} castShadow />

        <Suspense fallback={null}>
          <SmolAme scale={1.2} position={[0, -0.5, 0]} />
        </Suspense>

        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
