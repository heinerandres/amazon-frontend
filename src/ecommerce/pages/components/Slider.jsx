import React, { useEffect, useRef } from 'react'

export const Slider = () => {

  let sliderWrapper = null;
  let slides = null;
  let currentIndex = 0;

  console.log(slides);
  console.log(sliderWrapper);

  useEffect(()=>{
    sliderWrapper = document.getElementById("slider-wrapper");
    slides = document.querySelectorAll(".slide");
  }, []); 


  const showSlide = (index) => {
    const slideWidth = slides[0].clientWidth;
    sliderWrapper.style.transform = `translateX(-${index * slideWidth}px`;
  }

  const handlePrev = () => {
    currentIndex = (currentIndex > 0) ? currentIndex -1 : slides.length -1;
    showSlide(currentIndex);
  }

  const handleNext = () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  }

  


  return (
    <>
    
      <div id='slider'>
          <div onClick={ handlePrev } className='prev'>
            <div className='prev-next'>
              <img src="../img/prev.png"></img>
            </div>
          </div>


          <div id="slider-wrapper" className="slider-wrapper">
            <div id="slide" className='slide'>
              <img src="../img/3.jpg"></img>
            </div>
            <div className='slide'>
              <img src="../img/4.jpg"></img>
            </div>
            <div className='slide'>
              <img src="../img/7.jpg"></img>
            </div>
          </div>

          
          
          <div onClick={ handleNext } className='next'>
            <div className="prev-next">
              <img className="x" src="../img/next.png"></img>
            </div>
          </div>
      </div>
      
      
      
    </>
  )
}
