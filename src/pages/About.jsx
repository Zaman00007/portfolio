import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Sky from '../models/Sky';
import {skills ,experiences} from '../constants/index';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

function About() {
  return (
    <section className='max-container'>
      {/* <Canvas className='w-full h-screen bg-transparent' camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader/>}>
          <Sky/>
        </Suspense>
      </Canvas> */}
      <h1 className='head-text'>
        Hello I'm <span className='blue-gradient_text font-semibold drop-shadow'>Shahid</span>
      </h1>
      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-500'>
          I'm a full-stack developer with a passion for creating beautiful and functional web applications. I have a strong foundation in JavaScript, React, and Node.js, and I'm always looking to learn new technologies. I'm also a 3D artist and animator, and I love creating 3D models and animations using Blender and Three.js. I'm currently looking for a full-time position as a software developer.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill, index) => (
              <div key={index} className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center' >
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain'/>
                {/* <p className='font-semibold text-slate-500'>{skill.name}</p> */}
              </div>
              </div>
            ))}
        </div>
      </div>
      {/* <div>
        <h3 className='subhead-text'>Education</h3>
        <p className='mt-5 text-slate-500'>
          I have experience working with a variety of technologies and tools, including JavaScript, React, Node.js, Express, MongoDB, PostgreSQL, and more. I've also worked on a number of projects, including web applications, mobile apps, and games. I'm always looking to learn new things and expand my skill set, and I'm excited to take on new challenges.
        </p>
      </div>
      <div className='mt-12 flex'>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
            key={exp.company_name}
            date={exp.date}
            iconStyle={{ background: exp.iconBg }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={exp.icon}
                  alt={exp.company_name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            }
            contentStyle={{
              borderBottom: "8px",
              borderStyle: "solid",
              borderBottomColor: exp.iconBg,
              boxShadow: "none",
            }}
            >
              <h3 className='text-black text-xl font-poppins font-semibold '>{exp.title}</h3>
              <h4 className='text-black-500 font-base font-medium'>{exp.company_name}</h4>
              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {exp.points.map((point, index) => (
                  <li key={index} className='text-black-500/50 pl-1 font-normal'>{point}</li>
                ))}
              </ul>
              
            </VerticalTimelineElement>
          ))}

         </VerticalTimeline> 
      </div>
      <hr className='border-slate-200 mt-10'/>
      <CTA/> */}
    </section>
  )
}

export default About
