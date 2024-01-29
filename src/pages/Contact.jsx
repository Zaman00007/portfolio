import {useState, useRef, Suspense} from 'react';
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({name:"", email:"", message:"", message:""});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const handleFocus = (e) => {
    setCurrentAnimation("walk");
  };
  const handleBlur = (e) => {
    setCurrentAnimation("idle");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs.send('servic', 'templ', formRef.current, 'use').then(() => {
      setIsLoading(false);
      setForm({name:"", email:"", message:"", message:""});
    }).catch(() => {
      setCurrentAnimation("idle");
      console.log('error');
    })

    setTimeout(() => {
    
      setCurrentAnimation("idle");
    }, 2000);
  }

  return (
    <section className='relative flex lg:flx-row flex-col max-container'>
      <div className=' flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
      </div>
      <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
        <label className='text-black-500 font-semibold'>
          Name
          <input 
          className='input' 
          type='text' 
          placeholder='Enter your name' 
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>
        <label className='text-black-500 font-semibold'>
          Email
          <input 
          className='input' 
          type='text' 
          placeholder='email address' 
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label><label className='text-black-500 font-semibold'>
          Message
          <textarea
          className='input' 
          rows={4}
          placeholder='Your Message' 
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </label>
        <button
        className='btn'
        type='submit'
        disabled={isLoading}
        onFocus={handleFocus}
        onBlur={handleBlur}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      <div className='w-full h-[350px]'>
        {/* <Fox/> */}
        <Canvas 
          camera={{
            position:[0,0,5],
            fov: 60,
            near: 0.1,
            far: 1000,
          }}
        >
        <directionalLight intensity={2} position={[0,0,1]}/>
        <ambientLight intensity={0.5}/>
        <Suspense fallback={<Loader/>}>
              <Fox
                currentAnimation={currentAnimation}
                position = {[0.5, 0.35,0]}
                rotation ={[12.6, -0.6, 0]}
                scale = {[0.5,0.5,0.5]}
              />
            </Suspense>

        </Canvas>
      </div>
    </section>
  )
}

export default Contact
