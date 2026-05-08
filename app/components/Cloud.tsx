"use client";

import { Cloud, Clouds } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

/**
 * Volumetric cloud cluster — adapted from `nube/`.
 * Reads `window.__flightProgress` (0→1) each frame so the camera can "descend"
 * through the clouds during the hero intro: the group lifts up and fades out
 * as progress grows. Once progress >= 1 the group is hidden entirely so the
 * canvas can be unmounted by the parent.
 */
const CloudCluster = () => {
  const group = useRef<THREE.Group>(null);

  useFrame(({ invalidate }) => {
    const g = group.current;
    if (!g) return;
    const p = (typeof window !== "undefined" && (window as any).__flightProgress) || 0;
    g.position.y = -5 + p * 14;
    g.scale.setScalar(1 + p * 0.18);
    const fade = p < 0.45 ? 1 : Math.max(0, 1 - (p - 0.45) / 0.42);
    g.traverse((child) => {
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial | undefined;
      if (mat && (mat as any).isMeshBasicMaterial) {
        if (mat.userData.baseOpacity === undefined) mat.userData.baseOpacity = mat.opacity;
        mat.transparent = true;
        mat.opacity = (mat.userData.baseOpacity as number) * fade;
        mat.depthWrite = false;
      }
    });
    if (p > 0 && p < 1) invalidate();
  });

  return (
    <group ref={group} position={[0, -5, 0]}>
      <Clouds material={THREE.MeshBasicMaterial} frustumCulled={false}>
        <Cloud seed={1} segments={14} concentrate="inside" bounds={[10, 10, 10]} growth={3} position={[-1, 0, 0]} smallestVolume={2} scale={1.9} volume={2} speed={0.18} fade={5} color="#ffffff" opacity={0.85} />
        <Cloud seed={3} segments={14} concentrate="outside" bounds={[10, 10, 10]} growth={2} position={[2, 0, 2]} smallestVolume={2} scale={1} volume={2} fade={3} speed={0.1} color="#ffffff" opacity={0.9} />
        <Cloud seed={4} segments={14} concentrate="outside" bounds={[10, 20, 15]} growth={4} position={[-10, -10, 4]} smallestVolume={2} scale={2} speed={0.18} volume={3} color="#ffffff" opacity={0.85} />
        <Cloud seed={5} segments={14} concentrate="outside" bounds={[5, 5, 5]} growth={2} position={[6, -3, 8]} smallestVolume={2} scale={2} volume={2} fade={0.1} speed={0.1} color="#ffffff" opacity={0.9} />
        <Cloud seed={6} segments={14} concentrate="outside" bounds={[5, 5, 5]} growth={2} position={[0, -20, 20]} smallestVolume={2} scale={4} volume={3} fade={0.1} speed={0.08} color="#ffffff" opacity={0.8} />
        <Cloud seed={7} segments={14} concentrate="outside" bounds={[5, 5, 5]} growth={2} position={[10, -15, -5]} smallestVolume={2} scale={3} volume={3} fade={0.1} speed={0.08} color="#ffffff" opacity={0.85} />
      </Clouds>
    </group>
  );
};

export default CloudCluster;
