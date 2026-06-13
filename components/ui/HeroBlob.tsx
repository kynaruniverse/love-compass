"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useFrame((state) => {
    if (!meshRef.current) return;

    // Gentle continuous rotation
    meshRef.current.rotation.x += 0.0015;
    meshRef.current.rotation.y += 0.002;

    // React to pointer position smoothly
    const pointer = state.pointer;
    setTarget({ x: pointer.y * 0.3, y: pointer.x * 0.3 });

    meshRef.current.rotation.x += (target.x - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.y += (target.y - meshRef.current.rotation.y) * 0.02;
  });

  return (
    <mesh ref={meshRef} scale={viewport.width < 6 ? 1.4 : 2}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial
        color="#a9c2ad"
        roughness={0.35}
        metalness={0.1}
        flatShading
      />
    </mesh>
  );
}

export default function HeroBlob() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 4]} intensity={1.1} color="#fff7ec" />
        <directionalLight position={[-3, -2, -2]} intensity={0.4} color="#c1693b" />
        <Blob />
      </Canvas>
    </div>
  );
}