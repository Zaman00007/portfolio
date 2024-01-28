import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btntext}) =>{
    return (
        <div className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            <h1 >{text}</h1>
            {/* <a href={link} className='text-2xl font-bold text-center'>{bintext}</a> */}
            <Link to={link} className='underline'>
                {btntext}
            </Link>
        </div>
    )
}

const renderContent = {
    1:(
        <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Shahid</span>👋
        <br/>
          Full Stack 3D Developer!!!
        </h1>
    ),
    2: (
        
            <InfoBox text="I am a Tech-Savvy individual who just loves CODING!!!" 
            link="/about"
            btntext="Learn more"
            
            />
         
    ),
    3: (
        <InfoBox text="Explore some of my Craziest Projects!!" 
            link="/projects"
            btntext="Projects"
            
            />
    ),
    4: (
        <InfoBox text="Feel free to contact me for any tech related issues!!" 
            link="/contact"
            btntext="Contact Me"
            
            />
    ),
}



function HomeInfo({ currentStage}) {
  return renderContent[currentStage] || null;
}

export default HomeInfo
