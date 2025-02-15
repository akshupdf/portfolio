import React, { useState, useEffect } from 'react';

import a1 from './images/acord.jpg'
import a2 from './images/ash.png'
import a3 from './images/a5.jpg'
import loc from './images/locum.jpg'
import chat from './images/dp.png'
import chat1 from './images/pdf.png'
import lanka from './images/vera.png'
import welcome from './images/welcome.jpg'
import cart from './images/cart.jpg'
import chat2 from './images/chat3.jpg'

const ImageSlider = () => {
  const slides = [

    {
      id: 1,
      title: "Cafe Menu",
      description: "A web project for cafe",
      image: a3,
      link: "https://caffe-demo.netlify.app/",
      thumbnail: "/api/placeholder/100/100"
    },
   
    {
      id: 2,
      title: "Vera Project",
      description: "A web project for aloe products.",
      image: lanka,
      link: "https://vera-demo.netlify.app/",
      thumbnail: "/api/placeholder/100/100"
    },
    {
      id: 3,
      title: "Cart Demo",
      description: "A demo project showcasing cart functionalities",
      image: cart,
      link: "https://cartdemoo.netlify.app/",
      thumbnail: "/api/placeholder/100/100"
    },
    {
      id: 4,
      title: "Akshu PDF Web",
      description: "A PDF web project by Akshu",
      image: chat1,
      link: "https://akshupdfweb.netlify.app/",
      thumbnail: "/api/placeholder/100/100"
    },
    {
      id: 5,
      title: "Shoe Mania",
      description: "An e-commerce web project for Shoe Mania",
      image: chat2,
      link: "https://shoemania.netlify.app/",
      thumbnail: "/api/placeholder/100/100"
    },
    {
      id: 6,
      title: "DP partners",
      description: "A temporary web project",
      image: chat,
      link: "https://dppartner-demo.netlify.app/",
      thumbnail: "/api/placeholder/100/100"
    },
    // {
    //   id: 7,
    //   title: "Welcome App",
    //   description: "A welcoming app project",
    //   image: welcome,
    //   link: "https://welcomeappp.netlify.app/",
    //   thumbnail: "/api/placeholder/100/100"
    // },
    {
      id: 8,
      title: "A Square",
      description: "A square project on GitHub Pages",
      image: a2,
      link: "https://asquarehydro.netlify.app/",
      thumbnail: "/api/placeholder/100/100"
    },
    {
      id: 9,
      title: "Acord Seals",
      description: "A web project for Acord Seals",
      image: a1,
      link: "https://acordseals.netlify.app/",
      thumbnail: "/api/placeholder/100/100"
    },
    {
      id: 10,
      title: "Locume",
      description: "A web project for Locum services",
      image: loc,
      link: "https://locume.netlify.app/",
      thumbnail: "/api/placeholder/100/100"
    },
  ];
  

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const next = () => {
    setCurrentSlide((prev) => (prev + 1 ) % slides.length)
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-[10vh]">
      {/* Main Slide */}
      <div className="relative h-[600px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
              index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
              <div className="p-8 text-white max-w-xl h-full flex flex-col justify-center">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors">
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" className="see-more-button">
              See More
            </a>
                  </button>
                  {/* <button className="px-6 py-2 border border-white rounded hover:bg-white/20 transition-colors">
                    Subscribe
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-[10vh] transform -translate-x-1/2 flex items-center gap-4">
        {/* Arrow Controls */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-8 h-8 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        </div>

      {/* Thumbnails */}
      <div className="absolute lg:bottom-4 sm:bottom-[12vh] mx-auto  transform -translate-x-1/2 flex gap-2 right-[-40vh]">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`group relative ${
              currentSlide === index ? 'w-16 h-16' : 'w-12 h-12'
            } transition-all duration-300 overflow-hidden rounded-lg`}
          >
            <img
              src={slide.image}
              alt={`Go to slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors ${
                currentSlide === index ? 'bg-transparent' : ''
              }`}
            />
          </button>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-4 sm:right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
      >
        {isAutoPlaying ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ImageSlider;