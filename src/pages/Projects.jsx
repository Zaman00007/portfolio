import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Custom from '../models/Custom';
import WoodenBoard from '../models/WoodenBoard';
import Zaman from "../models/Zaman";

function Projects() {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5}/>
          <directionalLight intensity={1}/>
          {/* <Custom /> */}
          {/* <WoodenBoard
          position={[-4,-4,-4]}
          rotation={[0,0,0]}
          /> */}
          <Zaman
          position={[0,-4,0]}
          
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Projects
