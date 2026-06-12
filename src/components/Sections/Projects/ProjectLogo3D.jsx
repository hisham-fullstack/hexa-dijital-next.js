import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Environment, Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as THREE from "three";

const SvgModel = ({ url }) => {
  const svg = useLoader(SVGLoader, url);
  const groupRef = useRef();

  const pathData = useMemo(() => {
    return svg.paths.map((path) => ({
      shapes: path.toShapes(true),
      color: path.color,
    }));
  }, [svg]);

  // Kalınlık (depth) değerini buradan sildik, aşağıda dinamik hesaplayacağız
  const baseExtrudeSettings = useMemo(
    () => ({
      bevelEnabled: false,
      curveSegments: 24,
    }),
    [],
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Center
        onCentered={({ container, width }) => {
          if (width > 0) {
            const targetWidth = 40;
            const scaleFactor = targetWidth / width;
            container.scale.set(scaleFactor, -scaleFactor, scaleFactor);
          }
        }}
      >
        <group>
          {pathData.map((data, index) => {
            // --- SİHİRLİ MATEMATİK BURADA ---
            // Her üst katman bir öncekinden 0.1 birim daha kalın (depth) olacak.
            // Örn: Altıgen = 8, Tavuk = 8.1
            const layerDepth = 8 + index * 0.1;

            // Kalınlaşan bu katmanın sadece öne değil, arkaya da eşit taşması için
            // Z ekseninde (geriye doğru) kalınlık farkının yarısı kadar çekiyoruz.
            const zOffset = -(index * 0.05);

            return data.shapes.map((shape, i) => (
              <mesh key={`${index}-${i}`} position={[0, 0, zOffset]}>
                {/* Ayarları birleştirip dinamik kalınlığı uyguluyoruz */}
                <extrudeGeometry
                  args={[shape, { ...baseExtrudeSettings, depth: layerDepth }]}
                />
                <meshStandardMaterial
                  color={data.color}
                  metalness={0.5}
                  roughness={0.4}
                  envMapIntensity={0.8}
                  toneMapped={false}
                  side={THREE.DoubleSide}
                />
              </mesh>
            ));
          })}
        </group>
      </Center>
    </group>
  );
};

// ... ProjectLogo3D ana fonksiyonu (Canvas kısmı) aynı kalacak ...

export default function ProjectLogo3D({ logoUrl }) {
  if (!logoUrl) return null;

  return (
    <div
      style={{ width: "100%", height: "100%", position: "absolute", zIndex: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 120], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} />
        <directionalLight
          position={[-10, -10, -10]}
          intensity={1}
          color="#00fffb"
        />
        <Environment preset="studio" />

        <Float speed={2} rotationIntensity={0} floatIntensity={1.2}>
          <SvgModel url={logoUrl} />
        </Float>
      </Canvas>
    </div>
  );
}
