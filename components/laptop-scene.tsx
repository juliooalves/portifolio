"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
} from "@react-three/drei";
import LaptopModel from "@/components/laptop-model";

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#1a1a2e" wireframe />
    </mesh>
  );
}

export default function LaptopScene() {
  return (
    <div className=" justify-self-center w-full h-screen bg-[#0a0a14]">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 40 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#0a0a14"]} />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight
          position={[-5, 3, -5]}
          intensity={0.4}
          color="#53d8fb"
        />
        <pointLight
          position={[0, 2, 3]}
          intensity={0.8}
          color="#ffffff"
          distance={10}
        />
        <pointLight
          position={[0, -1, -3]}
          intensity={0.4}
          color="#53d8fb"
          distance={8}
        />

        <Suspense fallback={<LoadingFallback />}>
          <Float
            speed={1.2}
            rotationIntensity={0}
            floatIntensity={1.2}
            floatingRange={[-0.1, 0.1]}
          >
            <LaptopModel />
          </Float>

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4}
            color="#ADD8E6"
          />

          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={15}
          maxDistance={17}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
