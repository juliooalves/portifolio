"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import type * as THREE from "three";

const COLORS = {
  body: "#1a1a2e",
  screen: "#16213e",
  display: "#0f3460",
  keyboard: "#0f0f1a",
  accent: "#e94560",
};

function LaptopBase() {
  return (
    <group position={[0, -0.05, 0]}>
      {/* Base body */}
      <RoundedBox args={[3, 0.12, 2]} radius={0.04} smoothness={4}>
        <meshStandardMaterial
          color={COLORS.body}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Keyboard area */}
      <RoundedBox
        args={[2.6, 0.01, 1.4]}
        radius={0.01}
        smoothness={4}
        position={[0, 0.07, -0.1]}
      >
        <meshStandardMaterial
          color={COLORS.keyboard}
          metalness={0.5}
          roughness={0.6}
        />
      </RoundedBox>

      {/* Trackpad */}
      <RoundedBox
        args={[0.8, 0.01, 0.55]}
        radius={0.01}
        smoothness={4}
        position={[0, 0.075, 0.55]}
      >
        <meshStandardMaterial
          color={COLORS.keyboard}
          metalness={0.6}
          roughness={0.4}
        />
      </RoundedBox>

      {/* Keyboard keys - rows */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <mesh
            key={`key-${row}-${col}`}
            position={[-1.15 + col * 0.21, 0.08, -0.55 + row * 0.28]}
          >
            <boxGeometry args={[0.17, 0.015, 0.2]} />
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.4}
              roughness={0.7}
            />
          </mesh>
        )),
      )}

      {/* Front accent line */}
      <mesh position={[0, 0.0, 0.99]}>
        <boxGeometry args={[2.4, 0.02, 0.01]} />
        <meshStandardMaterial
          color={COLORS.accent}
          emissive={COLORS.accent}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

function LaptopScreen() {
  return (
    <group position={[0, 0.95, -0.95]} rotation={[-0.30, 0, 0]}>
      {/* Screen frame */}
      <RoundedBox args={[3, 2, 0.08]} radius={0.04} smoothness={4}>
        <meshStandardMaterial
          color={COLORS.screen}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Display panel */}
      <RoundedBox
        args={[2.7, 1.7, 0.01]}
        radius={0.02}
        smoothness={4}
        position={[0, 0, 0.045]}
      >
        <meshStandardMaterial
          color={COLORS.display}
          emissive="#1a3a6e"
          emissiveIntensity={0.4}
          metalness={0.1}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Screen glow content - subtle code lines */}

      {/* Camera dot */}
      <mesh position={[0, 0.9, 0.045]}>
        <circleGeometry args={[0.03, 16]} />
        <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Logo on back of screen */}
      <mesh position={[0, 0, -0.045]}>
        <circleGeometry args={[0.2, 32]} />
        <meshStandardMaterial
          color={COLORS.accent}
          emissive={COLORS.accent}
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

function LaptopHinge() {
  return (
    <group position={[0, 0.02, -0.95]}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 2.8, 16]} />
        <meshStandardMaterial
          color={COLORS.body}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

export default function LaptopModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} rotation={[0.3, 0, 0]}>
      <LaptopBase />
      <LaptopHinge />
      <LaptopScreen />
    </group>
  );
}
