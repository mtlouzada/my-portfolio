"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";

/* Interactive 3D NogglesRail — the CC0 model from gnars.com's /nogglesrails
   hero (r4topunk/gnars-website), where I shipped the mobile 3D noggles work.
   Adapted for this page: lights-only setup (no external HDR fetch), frame
   tinted with the page's teal accent, slow autorotate + drag to spin.
   Loaded via next/dynamic (no SSR) so three.js never reaches other routes. */

const MODEL_URL = "/models/nograil.glb";

/* Reads an accent CSS var from .cripto-root so the frame follows the page
   accent and the cripto theme, re-reading when the theme toggles. */
function useAccentHex(accentVar: string, fallback = "#eb9309") {
  const [hex, setHex] = useState(fallback);
  useEffect(() => {
    const read = () => {
      const root = document.querySelector(".cripto-root");
      if (!root) return;
      const v = getComputedStyle(root).getPropertyValue(accentVar).trim();
      if (v) setHex(v);
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-ctheme"],
    });
    return () => obs.disconnect();
  }, [accentVar]);
  return hex;
}

function RailModel({ frameColor }: { frameColor: string }) {
  const { scene } = useGLTF(MODEL_URL);
  const cloned = useMemo(() => scene.clone(), [scene]);

  // Center once + fixed lens materials (mesh names come from the .glb)
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(cloned);
    cloned.position.sub(box.getCenter(new THREE.Vector3()));
    cloned.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;
      if (mesh.name === "NogRail_2") {
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#ffffff",
          roughness: 0.35,
        });
      } else if (mesh.name === "NogRail_3") {
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#1a1a1a",
          roughness: 0.35,
        });
      }
    });
  }, [cloned]);

  // Frame follows the accent (reacts to the cripto theme toggle)
  useEffect(() => {
    cloned.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh || mesh.name !== "NogRail_1") return;
      mesh.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(frameColor),
        metalness: 0.4,
        roughness: 0.28,
      });
    });
  }, [cloned, frameColor]);

  return (
    <group rotation={[-0.15, -0.3, 0]}>
      <primitive object={cloned} />
    </group>
  );
}

export default function NogglesRail3D({
  accentVar = "--c-gold",
  className = "",
}: {
  accentVar?: string;
  className?: string;
}) {
  const accent = useAccentHex(accentVar);
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSpin(false);
    }
  }, []);

  return (
    <Canvas
      className={className}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <PerspectiveCamera makeDefault position={[50, 30, 230]} fov={50} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        autoRotate={spin}
        autoRotateSpeed={1.1}
      />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} />
      <directionalLight position={[-5, 3, 2]} intensity={1.2} />
      <spotLight position={[0, 8, 3]} intensity={2.2} angle={0.5} penumbra={0.6} />
      <RailModel frameColor={accent} />
    </Canvas>
  );
}

useGLTF.preload(MODEL_URL);
