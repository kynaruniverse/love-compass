"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

// Builds a 3D heart shape by extruding a 2D heart outline
function useHeartGeometry() {
  return useMemo(() => {
    const shape = new THREE.Shape();

    const x = 0, y = 0;
    shape.moveTo(x + 0.5, y + 0.5);
    shape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
    shape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
    shape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
    shape.bezierCurveTo(x + 1.3, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
    shape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1, y);
    shape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.6,
      bevelEnabled: true,
      bevelThickness: 0.15,
      bevelSize: 0.1,
      bevelSegments: 8,
      curveSegments: 24,
    });

    geometry.center();
    geometry.rotateZ(Math.PI);
    geometry.rotateX(Math.PI * 0.05);

    return geometry;
  }, []);
}

function Heart() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const geometry = useHeartGeometry();

  useFrame((state) => {
    if (!meshRef.current) return;

    // Gentle continuous rotation
    meshRef.current.rotation.y += 0.0035;

    // React to pointer position smoothly
    const pointer = state.pointer;
    setTarget({ x: pointer.y * 0.35, y: pointer.x * 0.4 });

    meshRef.current.rotation.x += (target.x - meshRef.current.rotation.x) * 0.03;
    meshRef.current.rotation.y += (target.y - meshRef.current.rotation.y) * 0.03;
  });

  const scale = viewport.width < 6 ? 1.1 : 1.5;

  return (
    <mesh ref={meshRef} geometry={geometry} scale={scale}>
      <meshStandardMaterial
        color="#caa8d6"
        roughness={0.3}
        metalness={0.2}
        flatShading={false}
      />
    </mesh>
  );
}

export default function HeroBlob() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 4]} intensity={1.1} color="#ffffff" />
        <directionalLight position={[-3, -2, -2]} intensity={0.5} color="#c9a14a" />
        <Heart />
      </Canvas>
    </div>
  );
}