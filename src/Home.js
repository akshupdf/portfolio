import React from 'react'
import { Scene } from './Model'

export default function Home() {
  return (
    <div className='flex lg:flex-row sm:flex-col h-screen bg-black text-white' name="home">
      
        <div >
               <Scene /> 
        </div>
        <div className='m-auto lg:w-[40%] lg:text-4xl italic'>
        Hi, I'm Akshay, a Full Stack developer with a passion for creating interactive and dynamic websites. 
        I integrate 3D models using React.js to bring ideas to life.
        </div>
    </div>
  )
}
