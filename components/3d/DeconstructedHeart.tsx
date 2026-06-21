"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface BadgeHotspot {
  slug: string;
  position: [number, number, number];
  color: string;
}

interface DeconstructedHeartProps {
  onBadgeClick: (slug: string) => void;
  selectedBadge: string | null;
}

// ── Individual petal component ──
function Petal({
  position,
  rotation,
  color,
  isSelected,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  isSelected: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      if (isSelected) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.15, 1.15, 1.15), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    // @ts-ignore
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.4}
        emissive={isSelected ? color : "#000000"}
        emissiveIntensity={isSelected ? 0.3 : 0}
      />
    </mesh>
  );
}

// ── Badge hotspot ──
function BadgeHotspot({
  position,
  slug,
  onBadgeClick,
  isSelected,
}: {
  position: [number, number, number];
  slug: string;
  onBadgeClick: (slug: string) => void;
  isSelected: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      const targetScale = isSelected ? 0.5 : hovered ? 0.4 : 0.35;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    // @ts-ignore
    <mesh
      ref={meshRef}
      position={position}
      onClick={() => onBadgeClick(slug)}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <sphereGeometry args={[0.35, 32, 32]} />
      <meshStandardMaterial
        color="#c9a14a"
        metalness={0.8}
        roughness={0.2}
        emissive={hovered || isSelected ? "#c9a14a" : "#8B7E3E"}
        emissiveIntensity={hovered || isSelected ? 0.6 : 0.2}
      />
    </mesh>
  );
}

// ── Main 3D scene ──
function HeartScene({
  onBadgeClick,
  selectedBadge,
}: {
  onBadgeClick: (slug: string) => void;
  selectedBadge: string | null;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && !selectedBadge) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  const petals: Array<{
    slug: string;
    position: [number, number, number];
    rotation: [number, number, number];
    color: string;
  }> = [
    {
      slug: "love",
      position: [1.2, 0.8, 0],
      rotation: [0.3, 0.5, 0],
      color: "#9E3B4E",
    },
    {
      slug: "intimacy",
      position: [-1.2, 0.8, 0],
      rotation: [-0.3, -0.5, 0],
      color: "#9E3B4E",
    },
    {
      slug: "love-giving",
      position: [1.2, -0.8, 0],
      rotation: [0.3, 0.5, Math.PI],
      color: "#c9a14a",
    },
    {
      slug: "intimacy-giving",
      position: [-1.2, -0.8, 0],
      rotation: [-0.3, -0.5, Math.PI],
      color: "#c9a14a",
    },
  ];

  return (
    // @ts-ignore
    <group ref={groupRef}>
      {/* Petals */}
      {petals.map((petal) => (
        <Petal
          key={petal.slug}
          position={petal.position}
          rotation={petal.rotation}
          color={petal.color}
          isSelected={selectedBadge === petal.slug}
        />
      ))}

      {/* Badge hotspots */}
      {petals.map((petal) => (
        <BadgeHotspot
          key={`hotspot-${petal.slug}`}
          position={[petal.position[0], petal.position[1], petal.position[2] + 1.5]}
          slug={petal.slug}
          onBadgeClick={onBadgeClick}
          isSelected={selectedBadge === petal.slug}
        />
      ))}
    </group>
  );
}

// ── Main component ──
export function DeconstructedHeart({
  onBadgeClick,
  selectedBadge,
}: DeconstructedHeartProps) {
  return (
    // @ts-ignore
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} />
      <HeartScene onBadgeClick={onBadgeClick} selectedBadge={selectedBadge} />
      <OrbitControls enableZoom={false} autoRotate={!selectedBadge} />
    </Canvas>
  );
}