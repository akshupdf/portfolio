import React, { useRef, useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader, useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls , useAnimations , useGLTF } from '@react-three/drei';

const Model2 = ({ scrollY }) => {

  const group = useRef();
  const {scene , animations } = useGLTF('./bee.glb' , true);
  const {actions , mixer } = useAnimations(animations, group)

  

  useEffect(() => {
    actions["Change form"].play();
  }, [mixer]);


  useFrame(() => {
    if (mixer) {
      
        const scrollProgress = scrollY / (document.body.scrollHeight - window.innerHeight);
        
     
        mixer.setTime((scrollProgress * 1.8) * actions["Change form"].getClip().duration);
        
       
        group.current.rotation.y = scrollProgress * 5; 
      }
           
  });

  return (
    <primitive
      ref={group}
      object={scene}
      dispose={null}
      scale={0.1} 
    />
  );
};

export const Scene = () => {
  const [scrollY, setScrollY] = useState(0);
  const [divPosition, setDivPosition] = useState({ top: 0, right: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollY(scrollTop);

      if(scrollTop < 700){
      setDivPosition({
        top: scrollTop * 1.4,
        left: scrollTop * 0.3 
      });
    }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div  style={{
        width: '50vw',
        overflow : "auto",
        zIndex : -1
      }} 
      className='max-h-[120vh] overflow-y-hidden '
      >
      <Canvas camera={{ position:[20,10,-20] , fov: 55 }}  style={{
        position: 'absolute',
        top: `${divPosition.top}px`,
        left: `${divPosition.left}px`,
        left : '100px',
        width: '50vw'
    }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[5, 5, 5]} />
        {/* Pass scrollY to the Model component */}
        <Model2 scrollY={scrollY} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
