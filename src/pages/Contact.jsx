import {useState, useRef, Suspense} from 'react';
import emailjs from '@emailjs/browser';
import Fox from '../models/Fox';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import useAlert from "../hooks/useAlert";


function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({name:"", email:"", message:"", message:""});
  const [isLoading, setIsLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();
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

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shahid",
          from_email: form.email,
          to_email: "shahidzaman75724@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setIsLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

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
