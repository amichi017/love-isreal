import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide_2 from './images/slide_2.jpg';
import slide_3 from './images/slide_3.jpg';
import slide_4 from './images/slide_4.jpg';

const Slideshow = () => {
  const images = [
    slide_2,
    slide_3,
    slide_4,
    slide_2,
    slide_2
  ];
  
  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div >
      <Zoom {...zoomInProperties} transitionDuration={1000} style={{width: window.innerWidth*0.3}}>
        {images.map((each, index) => 
        {console.log(each,"each");return (
          <div key={index} style={{width: '100%'}}>
            <img style={{ objectFit: "cover", width: '100%',height:250 }} src={each}/>
          </div>
        )})}
      </Zoom>
    </div>
  )
}

export default Slideshow;