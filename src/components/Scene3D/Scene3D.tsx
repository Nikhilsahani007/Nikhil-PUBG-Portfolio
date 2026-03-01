import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function HologramCore() {
    const meshRef = useRef<THREE.Mesh>(null);
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
        if (ringRef.current) {
            ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
            ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group>
                {/* Main body — distorted icosahedron */}
                <mesh ref={meshRef} position={[0, 0, 0]}>
                    <icosahedronGeometry args={[1.2, 1]} />
                    <MeshDistortMaterial
                        color="#00f0ff"
                        emissive="#00f0ff"
                        emissiveIntensity={0.4}
                        wireframe
                        transparent
                        opacity={0.6}
                        distort={0.2}
                        speed={2}
                    />
                </mesh>

                {/* Inner sphere glow */}
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.6, 16, 16]} />
                    <meshStandardMaterial
                        color="#00f0ff"
                        emissive="#00f0ff"
                        emissiveIntensity={0.8}
                        transparent
                        opacity={0.15}
                    />
                </mesh>

                {/* Orbit ring */}
                <mesh ref={ringRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.8, 0.02, 8, 64]} />
                    <meshStandardMaterial
                        color="#f0a000"
                        emissive="#f0a000"
                        emissiveIntensity={0.6}
                        transparent
                        opacity={0.5}
                    />
                </mesh>

                {/* Secondary ring */}
                <mesh position={[0, 0, 0]} rotation={[1, 0.5, 0]}>
                    <torusGeometry args={[2.1, 0.01, 8, 48]} />
                    <meshStandardMaterial
                        color="#00ff88"
                        emissive="#00ff88"
                        emissiveIntensity={0.4}
                        transparent
                        opacity={0.3}
                    />
                </mesh>

                {/* Floating data nodes */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                    const angle = (i / 6) * Math.PI * 2;
                    return (
                        <mesh
                            key={i}
                            position={[
                                Math.cos(angle) * 1.6,
                                Math.sin(angle) * 0.3,
                                Math.sin(angle) * 1.6,
                            ]}
                        >
                            <octahedronGeometry args={[0.08, 0]} />
                            <meshStandardMaterial
                                color="#00f0ff"
                                emissive="#00f0ff"
                                emissiveIntensity={1}
                            />
                        </mesh>
                    );
                })}
            </group>
        </Float>
    );
}

function Particles() {
    const count = 60;
    const ref = useRef<THREE.Points>(null);

    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#00f0ff"
                transparent
                opacity={0.5}
                sizeAttenuation
            />
        </points>
    );
}

interface Scene3DProps {
    className?: string;
}

export default function Scene3D({ className }: Scene3DProps) {
    return (
        <div className={className} style={{ width: '100%', height: '100%' }} aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 1.5]}
                performance={{ min: 0.5 }}
            >
                <ambientLight intensity={0.15} />
                <pointLight position={[3, 3, 3]} intensity={0.8} color="#00f0ff" />
                <pointLight position={[-3, -1, 2]} intensity={0.4} color="#f0a000" />
                <pointLight position={[0, 2, -3]} intensity={0.3} color="#00ff88" />

                <Suspense fallback={null}>
                    <HologramCore />
                    <Particles />
                </Suspense>
            </Canvas>
        </div>
    );
}
