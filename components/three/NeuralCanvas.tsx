'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const { normalized } = useMousePosition();

  const { nodes, positions, connections } = useMemo(() => {
    const count = 80;
    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        )
      );
    }

    const linePoints: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < 2.5) {
          linePoints.push(
            positions[i].x, positions[i].y, positions[i].z,
            positions[j].x, positions[j].y, positions[j].z
          );
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));

    return { nodes: positions, positions, connections: lineGeo };
  }, []);

  const pulseIndices = useMemo(() => {
    const idx: number[] = [];
    while (idx.length < 5) {
      const n = Math.floor(Math.random() * nodes.length);
      if (!idx.includes(n)) idx.push(n);
    }
    return idx;
  }, [nodes.length]);

  useFrame(({ clock }) => {
    const g = groupRef.current;
    if (!g) return;
    g.rotation.y += 0.001;
    g.rotation.y += (normalized.x * 0.3 - g.rotation.y) * 0.05;
    g.rotation.x += (-normalized.y * 0.2 - g.rotation.x) * 0.05;

    g.children.forEach((child, i) => {
      if (pulseIndices.includes(i) && child instanceof THREE.Mesh) {
        const scale = 1 + Math.sin(clock.elapsedTime * 2 + i) * 0.4;
        child.scale.setScalar(scale);
        const mat = child.material as THREE.MeshBasicMaterial;
        const t = (Math.sin(clock.elapsedTime * 2 + i) + 1) / 2;
        mat.color.setRGB(t * 0.55, t * 0.36 + (1 - t) * 0.9, t * 0.96 + (1 - t));
      }
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.9} />
        </mesh>
      ))}
      <lineSegments geometry={connections}>
        <lineBasicMaterial color="#8B5CF6" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

export default function NeuralCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <fog attach="fog" args={['#070709', 8, 20]} />
      <NeuralNetwork />
    </Canvas>
  );
}
