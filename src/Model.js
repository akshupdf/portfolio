import React, { useRef, useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader, useFrame, Canvas } from '@react-three/fiber';
import { Html, OrbitControls , useAnimations , useGLTF, useProgress } from '@react-three/drei';

const Model2 = ({ scrollY, setLoaded }) => {

  const group = useRef();
  const {scene , animations } = useGLTF('./bee.glb' , true);
  const {actions , mixer } = useAnimations(animations, group)

  

  useEffect(() => {
    actions["Change form"].play();
    setLoaded(true);
  }, [mixer, setLoaded]);


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

const Loader = () => {
  const { progress } = useProgress(); // Get loading progress
  return (
    <Html center>
      <div style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>
        Loading... {progress.toFixed(0)}%
      </div>
    </Html>
  );
};

export const Scene = () => {
  const [scrollY, setScrollY] = useState(0);
  const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollY(scrollTop);

      if(scrollTop < 700){
      setDivPosition({
        top: scrollTop * 1.4,
        left: scrollTop * 1 
      });
    }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div  >
      <Canvas camera={{ position:[20,10,-20] , fov: 55 }}  style={{
        position: 'absolute',
        top: `${divPosition.top}px`,
        left: `${divPosition.left}px`,
        width: '50vw',
        zIndex : "1"
    }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[5, 5, 5]} />
        {!loaded && <Loader />}
        {/* Pass scrollY to the Model component */}
        <Model2 scrollY={scrollY}   setLoaded={setLoaded} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
