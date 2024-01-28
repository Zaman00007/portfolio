import React from 'react'
import { useGLTF } from '@react-three/drei'
import planeScene from '../../public/assets/3d/plane.glb';

function Plane() {
    const {scene, animation} = useGLTF(planeScene);
  return (
    <mesh >
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane

