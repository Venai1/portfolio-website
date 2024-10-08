"use client";

import React, { useState, useRef, useEffect, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref = useRef<any>();
  
  // useMemo to ensure the sphere's positions are recalculated on every refresh
  const sphere = useMemo(() => 
    random.inSphere(new Float32Array(1500), { radius: 1.2 }), []
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Mark component as ready after mounting
    setIsReady(true);
  }, []);

  return isReady ? (
    <div className="w-full h-full fixed z-[5]"> {/* Set z-index to 0 for the stars */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  ) : null;
};

export default StarsCanvas;

