"use client";

import { useEffect, useRef } from "react";
import { mountAuroraCompass } from "@/lib/simulations/auroraCompassEngine";

export default function CompassCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const unmount = mountAuroraCompass(canvas);
    return unmount;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
      aria-hidden="true"
    />
  );
}
