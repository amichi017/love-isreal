import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide_2 from './images/slide_2.jpg';
import slide_3 from './images/slide_3.jpg';
import slide_4 from './images/slide_4.jpg';
import { withStyles,Card,Typography,Accordion,
  AccordionSummary ,AccordionDetails  } from '@material-ui/core';
  import Divider from '@material-ui/core/Divider';
const Slideshow = () => {
  const images = [
    slide_2,
    slide_3,
    slide_4,
    slide_2,
    slide_3
  ];
  
  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
   
  }
  return (
    <div style={{
      paddingTop:80, 
       Width:window.innerWidth,
      //hight:window.innerhight,
      // backgroundImage: `url(  ${ images[0] }  )` ,
     // marginTop:theme.spacing(),
      width:'auto',
      zIndex:-1,
      maxHight:window.innerhight,
      background: `linear-gradient(#0f0c29, #24243e)`
      //   //backgroundPosition: 'center',
      //    backgroundSize:"100% 95%",
      //   backgroundRepeat: 'no-repeat',
      }}>
      <Typography style={{
        direction:"rtl",
        //paddingTop:30,
        //mxwidth:500,
        paddingRight:window.innerWidth*0.02,
      // color:"#fff"
        }} 
        color="primary"
        variant="h5"
        >
        בית הכנסת אהבת ישראל
      </Typography>
      <Divider style={{paddingTop:5,width: window.innerWidth}}/>
      <div style={{paddingTop:10,}}>
      
        <Zoom {...zoomInProperties} transitionDuration={500} style={{width: window.innerWidth,height:280}}>
          {images.map((each, index) => 
          {return (
            <div key={index} style={{width: '100%'}}>
              <img style={{ objectFit: "cover", width: '100%',height:280 }} src={each}/>
            </div>
          )})}
        </Zoom>
      </div>

      <Divider style={{paddingTop:15,width: window.innerWidth}}/>
      <Typography style={{direction:"rtl",paddingTop:30,paddingRight:window.innerWidth*0.02,}} color="primary" variant="h5">
        רקע כללי
      </Typography>

      <Typography style={{direction:"rtl",paddingRight:window.innerWidth*0.02,paddingTop:10}} color="primary" variant="h5">
        בית הכנסת "אהבת ישראל"
      </Typography>

      <Typography style={{direction:"rtl",paddingRight:window.innerWidth*0.02,paddingLeft:window.innerWidth*0.02,paddingTop:10,color:"#fff",paddingBottom:30}}  variant="h5">
      במזרח גוש עציון למרגלות ההרדיון, על ספר מדבר יהודה, נמצא הישוב הפסטורלי נוקדים. 
הישוב הוקם בשנת 1982 ומונה כיום כ-300 משפחות המנהלות אורח חיים קהילתי מגוון: 
המעניק תחושת אחדות הבנה וכבוד הדדי בין אופיין הייחודי של המשפחות.
</Typography>

{/* <Typography style={{direction:"rtl",paddingRight:window.innerWidth*0.02,paddingTop:10}} color="primary" variant="h5">
        בית הכנסת "אהבת ישראל"
      </Typography> */}

    </div>
  )
}

export default Slideshow;