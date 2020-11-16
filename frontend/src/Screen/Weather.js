
  
import React, { useState, useEffect } from "react";
import  ReactLogo from '../images/map.svg';


// Geocode.setApiKey("AIzaSyALVjLwOIM1gf7EzdJJVmWLKdLP-yZGTcw");
// Geocode.enableDebug();

class Weather extends React.Component {
 


    render() {
      

        return (
            <div >
                  <img src={ReactLogo} alt="React Logo" style={{ paddingTop:window.innerHeight*0.05,paddingLeft:window.innerHeight*0.03,height:window.innerHeight*0.9,width:window.innerWidth*0.9}}/>
        

            
        </div>
        )
    }

}

export default Weather;