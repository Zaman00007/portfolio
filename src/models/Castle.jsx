import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/sea.glb";
import {a} from '@react-spring/three'
import { PerspectiveCamera } from 'three';


function Island (props) {
  const { nodes, materials } = useGLTF(islandScene);
  const islandRef = useRef();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(-40, 0, 50); 
  camera.lookAt(-500, 50, 0);
  return (
    
  <group ref={islandRef} {...props} >
      <group
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      >
        <group position={[0, 0, 0]}>
          <mesh
            geometry={nodes.Fortress_Fortress_0.geometry}
            material={materials.Fortress}
            scale={[0.12, 0.12, 0.12]}
          />
          <mesh
            
            geometry={nodes.Fortress_Fortress_0_1.geometry}
            material={materials.Fortress}
            scale={[0.12, 0.12, 0.12]}
          />
          <mesh
            
            geometry={nodes.Fortress_Fortress_0_2.geometry}
            material={materials.Fortress}
            scale={[0.12, 0.12, 0.12]}
          />
          <mesh
            
            geometry={nodes.Fortress_Environment_0.geometry}
            material={materials.Environment}
            scale={[0.12, 0.12, 0.12]}
          />
          <mesh
            
            geometry={nodes.Fortress_Sand_0.geometry}
            material={materials.Sand}
            scale={[0.12, 0.12, 0.12]}
          />
        </group>
      </group>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sea_Sea_0.geometry}
        material={materials.material}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, 0.15]}
      /> */}
      
    </group>
  
  );
}

useGLTF.preload("/island.glb");

export default Island;