import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingElements = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (cubeRef.current) {
      cubeRef.current.rotation.y = time * 0.2;
      cubeRef.current.rotation.x = time * 0.1;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.15;
    }
    if (torusRef.current) {
      torusRef.current.rotation.z = time * 0.3;
      torusRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 10]} intensity={2.5} color="#00F5FF" />
      <directionalLight position={[-10, -10, -10]} intensity={1.8} color="#7C3AED" />
      <pointLight position={[0, 0, 5]} intensity={2} color="#EC4899" />

      {/* Main floating sphere */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={sphereRef} position={[0, 0, 0]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial
            color="#7C3AED"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Secondary cyan glass cube */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={cubeRef} position={[3, 2, -2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            color="#00F5FF"
            roughness={0.1}
            metalness={0.1}
            transmission={0.9}
            thickness={1.5}
          />
        </mesh>
      </Float>

      {/* Pink metallic torus */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={torusRef} position={[-3, -2, -1]}>
          <torusGeometry args={[0.8, 0.3, 16, 100]} />
          <meshStandardMaterial
            color="#EC4899"
            roughness={0.3}
            metalness={0.9}
            emissive="#EC4899"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    </>
  );
};

const Particles = ({ count = 100 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#00F5FF"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
};

const Workspace3D: React.FC = () => {
  return (
    <div 
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        width: '100%',
        height: '100%'
      }}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <Particles count={150} />
        <FloatingElements />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Workspace3D;
