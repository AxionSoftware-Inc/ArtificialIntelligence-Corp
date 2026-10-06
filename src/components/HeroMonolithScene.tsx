"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroMonolithScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Safety: Check WebGL availability ---
    const isWebGLAvailable = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!isWebGLAvailable()) {
      return;
    }

    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number | null = null;

    try {
      const isMobile = window.innerWidth < 768;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      // --- Scene & Camera ---
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.045);

      const camera = new THREE.PerspectiveCamera(42, Math.max(width / Math.max(height, 1), 0.1), 0.1, 100);
      camera.position.set(0, isMobile ? 2.2 : 1.8, isMobile ? 10.5 : 9.2);

      // --- WebGL Renderer with Safe Defaults ---
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? "default" : "high-performance",
        precision: isMobile ? "mediump" : "highp",
      });

      renderer.setSize(width, height);
      renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;

      // Only enable shadow maps on desktop to protect mobile GPU
      if (!isMobile) {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      }

      // Handle WebGL context loss safely without crashing browser tab
      renderer.domElement.addEventListener("webglcontextlost", (e) => {
        e.preventDefault();
        if (animId) cancelAnimationFrame(animId);
      });

      container.appendChild(renderer.domElement);

      // --- Main Scene Group ---
      const sceneGroup = new THREE.Group();
      sceneGroup.rotation.y = -0.32;
      sceneGroup.rotation.x = isMobile ? 0.08 : 0.12;
      sceneGroup.position.set(isMobile ? 0 : 0.6, isMobile ? -0.8 : -0.2, 0);
      scene.add(sceneGroup);

      // --- Lighting ---
      const ambientLight = new THREE.AmbientLight(0x0d1117, 2.0);
      scene.add(ambientLight);

      const rimLight = new THREE.DirectionalLight(0x38bdf8, isMobile ? 2.8 : 3.5);
      rimLight.position.set(6, 8, -4);
      scene.add(rimLight);

      const fillLight = new THREE.DirectionalLight(0x818cf8, 1.2);
      fillLight.position.set(-6, 3, 4);
      scene.add(fillLight);

      // --- Ground Reflection Plane ---
      const groundGeo = new THREE.PlaneGeometry(30, 30);
      const groundMat = new THREE.MeshStandardMaterial({
        color: 0x050608,
        roughness: 0.25,
        metalness: 0.85,
      });
      const ground = new THREE.Mesh(groundGeo, groundMat);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -2.4;
      if (!isMobile) ground.receiveShadow = true;
      sceneGroup.add(ground);

      // --- Materials for Pillars ---
      const pillarMat = new THREE.MeshStandardMaterial({
        color: 0x111317,
        roughness: 0.3,
        metalness: 0.88,
      });

      const capMat = new THREE.MeshStandardMaterial({
        color: 0x090a0d,
        roughness: 0.08,
        metalness: 0.95,
      });

      // Helper to create a glowing square halo frame
      function createSquareHalo(size: number, thickness: number) {
        const haloGroup = new THREE.Group();
        const half = size / 2;

        const tubeGeo = new THREE.CylinderGeometry(thickness, thickness, size, isMobile ? 8 : 16);
        const glowGeo = new THREE.CylinderGeometry(thickness * 2.8, thickness * 2.8, size, isMobile ? 8 : 16);

        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const glowMat = new THREE.MeshBasicMaterial({
          color: 0x67e8f9,
          transparent: true,
          opacity: 0.65,
          blending: THREE.AdditiveBlending,
        });

        // Side 1 (top)
        const topCore = new THREE.Mesh(tubeGeo, coreMat);
        topCore.rotation.z = Math.PI / 2;
        topCore.position.set(0, 0, -half);
        const topGlow = new THREE.Mesh(glowGeo, glowMat);
        topGlow.rotation.z = Math.PI / 2;
        topGlow.position.set(0, 0, -half);
        haloGroup.add(topCore, topGlow);

        // Side 2 (bottom)
        const botCore = new THREE.Mesh(tubeGeo, coreMat);
        botCore.rotation.z = Math.PI / 2;
        botCore.position.set(0, 0, half);
        const botGlow = new THREE.Mesh(glowGeo, glowMat);
        botGlow.rotation.z = Math.PI / 2;
        botGlow.position.set(0, 0, half);
        haloGroup.add(botCore, botGlow);

        // Side 3 (left)
        const leftCore = new THREE.Mesh(tubeGeo, coreMat);
        leftCore.rotation.x = Math.PI / 2;
        leftCore.position.set(-half, 0, 0);
        const leftGlow = new THREE.Mesh(glowGeo, glowMat);
        leftGlow.rotation.x = Math.PI / 2;
        leftGlow.position.set(-half, 0, 0);
        haloGroup.add(leftCore, leftGlow);

        // Side 4 (right)
        const rightCore = new THREE.Mesh(tubeGeo, coreMat);
        rightCore.rotation.x = Math.PI / 2;
        rightCore.position.set(half, 0, 0);
        const rightGlow = new THREE.Mesh(glowGeo, glowMat);
        rightGlow.rotation.x = Math.PI / 2;
        rightGlow.position.set(half, 0, 0);
        haloGroup.add(rightCore, rightGlow);

        return haloGroup;
      }

      // --- Create 3 Ascending Monolith Pillars ---
      const pillarConfigs = [
        {
          w: 1.9,
          h: 1.5,
          d: 1.9,
          x: -1.7,
          y: -2.4 + 1.5 / 2,
          z: 1.6,
          haloSize: 2.05,
        },
        {
          w: 1.9,
          h: 2.8,
          d: 1.9,
          x: 0.5,
          y: -2.4 + 2.8 / 2,
          z: 0.1,
          haloSize: 2.05,
        },
        {
          w: 1.9,
          h: 4.1,
          d: 1.9,
          x: 2.7,
          y: -2.4 + 4.1 / 2,
          z: -1.4,
          haloSize: 2.05,
        },
      ];

      const halos: { group: THREE.Group; baseY: number; phase: number }[] = [];

      pillarConfigs.forEach((cfg, idx) => {
        const bodyGeo = new THREE.BoxGeometry(cfg.w, cfg.h, cfg.d);
        const body = new THREE.Mesh(bodyGeo, pillarMat);
        body.position.set(cfg.x, cfg.y, cfg.z);
        if (!isMobile) {
          body.castShadow = true;
          body.receiveShadow = true;
        }
        sceneGroup.add(body);

        const capH = 0.08;
        const capGeo = new THREE.BoxGeometry(cfg.w + 0.02, capH, cfg.d + 0.02);
        const cap = new THREE.Mesh(capGeo, capMat);
        cap.position.set(cfg.x, cfg.y + cfg.h / 2 + capH / 2, cfg.z);
        sceneGroup.add(cap);

        const edgesGeo = new THREE.EdgesGeometry(bodyGeo);
        const edgesMat = new THREE.LineBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.25,
        });
        const wire = new THREE.LineSegments(edgesGeo, edgesMat);
        wire.position.copy(body.position);
        sceneGroup.add(wire);

        const halo = createSquareHalo(cfg.haloSize, 0.032);
        const haloBaseY = cfg.y + cfg.h / 2 + 0.42;
        halo.position.set(cfg.x, haloBaseY, cfg.z);
        sceneGroup.add(halo);

        const haloLight = new THREE.PointLight(0x67e8f9, isMobile ? 3.0 : 4.5, 6.5);
        haloLight.position.set(cfg.x, haloBaseY + 0.1, cfg.z);
        sceneGroup.add(haloLight);

        halos.push({ group: halo, baseY: haloBaseY, phase: idx * 1.3 });
      });

      // --- Floating Ambient AI Particles ---
      const particleCount = isMobile ? 24 : 65;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.3) * 10;
        particlePositions[i + 1] = Math.random() * 6 - 2;
        particlePositions[i + 2] = (Math.random() - 0.5) * 8;
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0x93c5fd,
        size: isMobile ? 0.035 : 0.045,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      sceneGroup.add(particles);

      // --- Mouse & Parallax Interaction ---
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetX = x * 0.28;
        targetY = y * 0.18;
      };

      if (!isMobile) {
        window.addEventListener("mousemove", handleMouseMove);
      }

      // --- Responsive Resize ---
      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      };

      window.addEventListener("resize", handleResize);

      // --- Animation Loop ---
      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        if (isMobile) {
          // Gentle autonomous swaying for mobile touchscreens
          targetX = Math.sin(elapsedTime * 0.5) * 0.08;
          targetY = Math.cos(elapsedTime * 0.4) * 0.04;
        }

        mouseX += (targetX - mouseX) * 0.045;
        mouseY += (targetY - mouseY) * 0.045;

        sceneGroup.rotation.y = -0.32 + mouseX;
        sceneGroup.rotation.x = (isMobile ? 0.08 : 0.12) - mouseY;

        // Floating halos breathing & subtle levitation
        halos.forEach(({ group, baseY, phase }) => {
          const floatOffset = Math.sin(elapsedTime * 1.8 + phase) * 0.07;
          group.position.y = baseY + floatOffset;
          group.rotation.x = Math.sin(elapsedTime * 1.2 + phase) * 0.03;
          group.rotation.z = Math.cos(elapsedTime * 1.2 + phase) * 0.03;
        });

        // Slow particle drift
        const positions = particleGeo.attributes.position.array as Float32Array;
        for (let i = 1; i < particleCount * 3; i += 3) {
          positions[i] += 0.003;
          if (positions[i] > 4) {
            positions[i] = -2;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      // --- Cleanup ---
      return () => {
        if (!isMobile) {
          window.removeEventListener("mousemove", handleMouseMove);
        }
        window.removeEventListener("resize", handleResize);
        if (animId) cancelAnimationFrame(animId);
        if (renderer) {
          renderer.dispose();
          if (container && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    } catch {
      // Gracefully fall back if WebGL fails on lower-tier hardware
      return;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    />
  );
}
