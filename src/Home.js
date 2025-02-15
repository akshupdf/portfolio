import React from 'react'
import { Scene } from './Model'

export default function Home() {
  return (
    <div className='flex lg:flex-row sm:flex-col h-screen bg-gray-300 text-gray-800' name="home">
      
        <div >
               <Scene /> 
        </div>
        <div className='m-auto lg:w-[40%] lg:text-4xl italic absolute right-20 top-[40vh]'>
       <h1 className='font-bold'> Hi, I'm Akshay,  </h1>
        
        <p className='mt-8'>a Full Stack developer with a passion for creating interactive and dynamic websites. 
        I integrate 3D models using React.js to bring ideas to life. </p>
        </div>
    </div>
  )
}
