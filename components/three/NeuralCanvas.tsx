'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function NeuralNetwork() {
  const outerGroupRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<(THREE.Mesh | null)[]>([]);
  const lineGeoRef = useRef<THREE.BufferGeometry>(null);
  const { normalized } = useMousePosition();

  const { targetPositions, initPositions, indices } = useMemo(() => {
    const count = 120; // Increased count for a denser 3D look
    const targets: THREE.Vector3[] = [];
    const inits: THREE.Vector3[] = [];
    
    const radius = 6;
    for (let i = 0; i < count; i++) {
      // Generate points in a sphere for that 3D base look
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.cbrt(Math.random()) * radius;
      
      targets.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
      
      const spread = 25; // Wider spread
      inits.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * spread * 2,
          (Math.random() - 0.5) * spread,
          (Math.random() - 0.5) * spread * 0.5
        )
      );
    }

    const idx: number[] = [];
    for (let i = 0; i < targets.length; i++) {
      for (let j = i + 1; j < targets.length; j++) {
        if (targets[i].distanceTo(targets[j]) < 2.5) {
          idx.push(i, j);
        }
      }
    }

    return { targetPositions: targets, initPositions: inits, indices: idx };
  }, []);

  const pulseIndices = useMemo(() => {
    const idx: number[] = [];
    while (idx.length < 8) {
      const n = Math.floor(Math.random() * targetPositions.length);
      if (!idx.includes(n)) idx.push(n);
    }
    return idx;
  }, [targetPositions.length]);

  useFrame(({ clock }) => {
    const g = groupRef.current;
    const outer = outerGroupRef.current;
    if (!g || !outer) return;

    const elapsed = clock.elapsedTime;
    const DISPERSE_DURATION = 0.6;
    const GATHER_DURATION = 2.8;
    const GATHER_START = DISPERSE_DURATION;
    const SPIN_START = GATHER_START + GATHER_DURATION;

    const linePositions = lineGeoRef.current?.attributes.position?.array as Float32Array;

    for (let i = 0; i < targetPositions.length; i++) {
      let currentPos = new THREE.Vector3();

      if (elapsed < GATHER_START) {
        currentPos.copy(initPositions[i]);
        currentPos.x += (Math.random() - 0.5) * 0.04;
        currentPos.y += (Math.random() - 0.5) * 0.04;
        currentPos.z += (Math.random() - 0.5) * 0.04;
      } else if (elapsed < SPIN_START) {
        const raw = (elapsed - GATHER_START) / GATHER_DURATION;
        const p = easeInOut(Math.min(raw, 1));
        currentPos.copy(initPositions[i]).lerp(targetPositions[i], p);
      } else {
        currentPos.copy(targetPositions[i]);
      }

      const node = nodesRef.current[i];
      if (node) {
        node.position.copy(currentPos);
        
        if (pulseIndices.includes(i)) {
          const scale = 1 + Math.sin(elapsed * 2 + i) * 0.4;
          node.scale.setScalar(scale);
          const mat = node.material as THREE.MeshBasicMaterial;
          const t = (Math.sin(elapsed * 2 + i) + 1) / 2;
          mat.color.setRGB(t * 0.55, t * 0.36 + (1 - t) * 0.9, t * 0.96 + (1 - t));
        }
      }

      if (linePositions) {
        linePositions[i * 3] = currentPos.x;
        linePositions[i * 3 + 1] = currentPos.y;
        linePositions[i * 3 + 2] = currentPos.z;
      }
    }

    if (lineGeoRef.current && lineGeoRef.current.attributes.position) {
      lineGeoRef.current.attributes.position.needsUpdate = true;
    }

    // Continuous spin on inner group
    if (elapsed >= SPIN_START) {
      g.rotation.y = (elapsed - SPIN_START) * 0.3;
      g.position.y = Math.sin((elapsed - SPIN_START) * 0.8) * 0.1;
    }

    // Interactive mouse rotation on outer group
    outer.rotation.y += (normalized.x * 0.3 - outer.rotation.y) * 0.05;
    outer.rotation.x += (-normalized.y * 0.2 - outer.rotation.x) * 0.05;
  });

  return (
    <group ref={outerGroupRef}>
      <group ref={groupRef}>
        {targetPositions.map((_, i) => (
          <mesh 
            key={i} 
            ref={(el) => {
              if (el) nodesRef.current[i] = el;
            }}
          >
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshBasicMaterial color="#00E5FF" transparent opacity={0.9} />
          </mesh>
        ))}
        <lineSegments>
          <bufferGeometry ref={lineGeoRef}>
            <bufferAttribute
              attach="attributes-position"
              count={targetPositions.length}
              array={new Float32Array(targetPositions.length * 3)}
              itemSize={3}
            />
            <bufferAttribute
              attach="index"
              count={indices.length}
              array={new Uint16Array(indices)}
              itemSize={1}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#8B5CF6" transparent opacity={0.15} />
        </lineSegments>
      </group>
    </group>
  );
}

export default function NeuralCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <fog attach="fog" args={['#070709', 8, 30]} />
      <NeuralNetwork />
    </Canvas>
  );
}
