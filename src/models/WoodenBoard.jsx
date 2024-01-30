import React, { useRef, useEffect } from 'react';
import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const WoodenBoard = ({ ...props }) => {
  const mesh = useRef();

  useEffect(() => {
    // Define the text
    const textGeometry = new THREE.BufferGeometry('Your Text', {
      size: 2, // Adjust the size as needed
      height: 2, // Adjust the height as needed
    });

    const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Adjust the color as needed

    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(0, 0.5, 1); // Adjust the position as needed

    // Attach the text mesh to the board
    mesh.current.add(textMesh);
  }, []);
  useFrame(() => {
    
    // mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.0005 * Math.PI * 2;
  });

  return (
    <mesh ref={mesh} {...props}>
      {/* Define the wooden board geometry */}
      <boxGeometry args={[15, 10, 2]} />

      {/* Apply a wooden material */}
      <meshStandardMaterial
        color={0x8B4513}
        roughness={0.75}
        metalness={0.25}
      />
       <Text position={[2.1, 2.4, 2]} color="green" fontSize={1}>
        Projects
      </Text>
    </mesh>
  );
};

export default WoodenBoard;
