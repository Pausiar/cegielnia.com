"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from "@react-three/drei";
import { Suspense, useState } from "react";
import CloudCluster from "./Cloud";

/**
 * Lightweight WebGL canvas for the one-shot hero intro.
 * Tuned to stay reasonably sharp without keeping a heavy idle scene alive.
 */
const HeroCanvas = () => {
  const [dpr, setDpr] = useState<[number, number]>([1, 1.75]);

  return (
    <Canvas
      className="hero-canvas-el"
      dpr={dpr}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true, stencil: false, depth: false }}
      camera={{ position: [0, 0, 16], fov: 45 }}
      frameloop="always"
      style={{ position: "absolute", inset: 0 }}
    >
      <PerformanceMonitor
        onDecline={() => setDpr([1, 1])}
        onIncline={() => setDpr([1, 1.75])}
      />
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <CloudCluster />
      </Suspense>
      <AdaptiveDpr />
      <AdaptiveEvents />
    </Canvas>
  );
};

export default HeroCanvas;
