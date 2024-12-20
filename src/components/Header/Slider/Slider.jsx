import React, { useState, useEffect } from 'react';
import './slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  
  const slides = [
    { content: "Aprovecha las 18 Cuotas sin Interes." },
    { content: "Descuentos Increibles Pagando en Efectivo." },
    { content: "Envios sin Cargo." }
  ];

  const totalSlides = slides.length;

 
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);


  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

 
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= totalSlides) {
      setCurrentIndex(0); 
    }
  };

  return (
    <div className='slider-container background'>
        <div className="slider-container">
            <div
                className={`slider ${isTransitioning ? 'transition' : ''}`}
                style={{ transform: `translateX(-${(currentIndex % totalSlides) * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
            >
                {slides.concat(slides[0]).map((slide, index) => ( 
                <div className="slide" key={index}>
                    <span className='span-slider'>{slide.content}</span>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Slider;
