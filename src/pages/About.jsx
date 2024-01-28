import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Sky from '../models/Sky';

function About() {
  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent' camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader/>}>
          <Sky/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default About
