import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Custom from '../models/Custom';
import WoodenBoard from '../models/WoodenBoard';
import Zaman from "../models/Zaman";
import {projects} from '../constants/index.js';
import arrow from '../assets/icons/arrow.svg';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

function Projects() {
  return (
    <section className='max-container'>
      <Canvas
        camera={{
          position:[0,0,5],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5}/>
          <directionalLight intensity={1}/> 
          {/* <Custom />
          {/* <WoodenBoard
          position={[-4,-4,-4]}
          rotation={[0,0,0]}
          /> */}
          <Zaman
          position={[0,-2,0]}
          scale={[1.8,1.8,1.8]}
          
          />
        </Suspense>
      </Canvas>
  
     
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-500'>
          I've undertaken various projects over the years, but these hold a special place in my heart. A number of them are open-source, so if you find something intriguing, you're welcome to delve into the codebase and share your ideas for further improvements. Your input is greatly appreciated
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
      </section>
    
  )
}

export default Projects
