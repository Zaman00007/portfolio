// CustomObject.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

const Custom = () => {
  const mesh = useRef();

  // This will run on every frame
  useFrame(() => {
    // Rotate the mesh
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      {/* Define your custom geometry and material */}
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  );
};

export default Custom;
