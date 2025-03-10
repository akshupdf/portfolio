import React from 'react';
import a1 from './images/acord.jpg'
import a2 from './images/ash.png'
import chat from './images/vera.png'
import chat1 from './images/akshupdfweb.jpg'
import lanka from './images/dp.png'
import welcome from './images/welcome.jpg'
import cart from './images/pdf.png'
import chat2 from './images/chat3.jpg'

const Project = () =>{

    return(

        <div  className='text-white  bg-black ' name="project">
            <div>
            <h1 className='text-3xl underline text-center p-8 '>Some Of My Work</h1>

            </div>
            <div className='grid sm:grid-cols-3 md:grid-cols-m gap-4 p-16 m-4 '>
                <div className='container p-4'>
                    <a href="https://acordseals.netlify.app/"><img src={a1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://dppartner-demo.netlify.app/"><img src={lanka} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://cartdemoo.netlify.app/"><img src={cart} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4 '>
                 <a href="https://akshupdfweb.netlify.app/">  <img src={chat1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4 '>
                 <a href="https://shoemania.netlify.app/">  <img src={chat2} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://akshupdf.github.io/vera/"><img src={chat} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                {/* <div className='container p-4'>
                   <a href="https://welcomeappp.netlify.app/"><img src={welcome} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div> */}
                <div className='container p-4'>
                <a href="https://asquarehydro.netlify.app/"><img src={a2} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                
                 
              {/*  <div className='container p-4 '>
                    <img src={chat2} alt='/' className='hover:scale-125 ease-in-out duration-300' />

            <div className='grid sm:grid-cols-2 md:grid-cols-m gap-4 p-16 m-4 '>
                <div className='container p-2'>
                    <a href="https://akshupdf.github.io/asquare/"><img src={a1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-2'>
                <a href="https://akshupdf.github.io/asquare/"><img src={a2} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-2 '>
                    <img src={chat} alt='/' className='hover:scale-125 ease-in-out duration-300' />
                </div>
                <div className='container p-2'>
                    <img src={chat1} alt='/' className='hover:scale-125 ease-in-out duration-300' />

                </div>

            </div> 
            <hr></hr>
            
        </div> */}
        </div>
        </div>
        
    )
}

export default Project;
