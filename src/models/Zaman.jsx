import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import wood from "../assets/3d/Zaman.glb";
import { useFrame } from "@react-three/fiber";

const Zaman = ({ ...props }) => {
  const name = useRef();
  console.log(name);

  useFrame(() => {
    name.current.rotation.y += 0.0005 * Math.PI * 2;
  });

  const { nodes, materials } = useGLTF(wood);

  return (
    <group {...props} ref={name}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[-0.497, 1.018, -0.096]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.5, 0.5, 2.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[0.146, 1.01, 0.002]}
        rotation={[1.559, -0.007, -1.56]}
      />
    </group>
  );
};

useGLTF.preload(wood);
export default Zaman;
