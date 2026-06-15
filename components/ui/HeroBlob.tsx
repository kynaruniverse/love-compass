"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

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
  const geometry = useHeartGeometry();

  // Track elapsed time to drive the spin-down curve
  const clock = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    clock.current += delta;
    const t = clock.current;

    // Spin phase: 0–10s
    // Speed starts at ~8 rad/s and decelerates exponentially to ~0.004 rad/s
    const SPIN_DURATION = 10;
    if (t < SPIN_DURATION) {
      // Exponential decay: speed = initialSpeed * e^(-k*t)
      // k chosen so speed at t=10 ≈ 0.004 (effectively stopped)
      const initialSpeed = 8;
      const k = Math.log(initialSpeed / 0.004) / SPIN_DURATION; // ≈ 0.756
      const spinSpeed = initialSpeed * Math.exp(-k * t);
      meshRef.current.rotation.y += spinSpeed * delta;
    } else {
      // Post-spin: gentle idle drift + pointer tracking
      const idleSpeed = 0.004;
      meshRef.current.rotation.y += idleSpeed;

      const pointer = state.pointer;
      const targetX = pointer.y * 0.35;
      const targetY = meshRef.current.rotation.y + pointer.x * 0.4;
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.03;
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.03;
    }
  });

  const scale = viewport.width < 6 ? 2.2 : 2.8;

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
    <div className="hero-canvas" aria-hidden="true" style={{ opacity: 0.55, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 4]} intensity={1.1} color="#ffffff" />
        <directionalLight position={[-3, -2, -2]} intensity={0.5} color="#c9a14a" />
        <Heart />
      </Canvas>
    </div>
  );
}