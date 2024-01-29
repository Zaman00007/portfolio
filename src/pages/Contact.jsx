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
  const handleFocus = (e) => {};
  const handleBlur = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send('service_3qg3k7a', 'template_6x3w8xq', formRef.current, 'user_0h4Z3lYc4n8m3eX5dVh4B').then(() => {
      setIsLoading(false);
      setForm({name:"", email:"", message:"", message:""});
    }).catch(() => {
      console.log('error');
    })

    setTimeout(() => {
      setIsLoading(false);
      setForm({name:"", email:"", message:"", message:""});
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
      <div className='lg:w-1/2 w-full lg:h-auto h-[350px]'>
        {/* <Fox/> */}
        <Canvas 
          camera={{
            position:[0,0,5],
            fov: 60,
            near: 0.1,
            far: 1000,
          }}
        >
        <directionalLight intensity={2}/>
        <ambientLight intensity={2}/>
        <Suspense fallback={<Loader/>}>
              <Fox
                position = {[0,-1,0]}
                rotation ={[12,0,0]}
                scale = {[0.5,0.5,0.5]}
              />
            </Suspense>

        </Canvas>
      </div>
    </section>
  )
}

export default Contact
