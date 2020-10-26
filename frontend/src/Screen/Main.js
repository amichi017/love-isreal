import React,{Component}from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import video_1 from '../video/video_1.mp4';
import slide_2 from '../images/slide_2.jpg';
import slide_3 from '../images/slide_3.jpg';
import slide_4 from '../images/slide_4.jpg';
import slide_5 from '../images/slide_5.jpg';
import slide_6 from '../images/slide_6.jpg';
import slide_7 from '../images/slide_7.jpg';
import slide_8 from '../images/slide_8.jpg';
import slide_9 from '../images/slide_9.jpg';
import slide_10 from '../images/slide_10.jpg';
import slide_11 from '../images/slide_11.jpg';
import slide_12 from '../images/slide_12.jpg';
import slide_13 from '../images/slide_13.jpeg';
import slide_14 from '../images/slide_14.jpeg';
import slide_15 from '../images/slide_15.jpeg';
import slide_16 from '../images/slide_16.jpeg';
import slide_17 from '../images/slide_17.jpeg';
import slide_18 from '../images/slide_18.jpeg';
import slide_19 from '../images/slide_19.jpeg';
import slide_20 from '../images/slide_20.jpeg';
import slide_21 from '../images/slide_21.jpeg';
import slide_22 from '../images/slide_22.jpeg';
import slide_23 from '../images/slide_23.jpeg';
import slide_24 from '../images/slide_24.jpeg';
import slide_25 from '../images/slide_25.jpeg';
//import stars from './images/stars.jpg';
import { withStyles,Typography,CardContent,
  AccordionSummary ,Card,Paper  } from '@material-ui/core';
  import Divider from '@material-ui/core/Divider';
  import { ReactComponent as YourSvg } from '../svg/torah.svg';
  import { ReactComponent as Sedor } from '../svg/sedor.svg';
  import styled, { keyframes } from 'styled-components'

  const rotate = keyframes`
  from {
    transform: rotate(0deg);
    z-index:-50;
    background-image: linear-gradient(#0f0c29, #24243e);
   
    
  }

  to {
    transform: rotate(180deg);
    z-index:50;
  }
`;

const fade = (primaryColor, secondaryColor) => keyframes`
0% {
fill:${primaryColor};
}
50% {
 fill:${secondaryColor};
}
100%{
  fill:${primaryColor};
}
`;

const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`;

const StyledLogo = styled(YourSvg)`
  animation: ${rotate} infinite 20s linear;
  height: 25rem;
  width: 25rem;
  display: inline-block;
  margin: auto;
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 8s linear;
  }
  .circle {
    animation: ${pulse} infinite 4s linear;
    &:hover {
      animation-play-state: paused;
      cursor: pointer;
    }
  }
`;

const circlePulse = (colorOne, colorTwo) => keyframes`
0% {
  fill:${colorOne};
  stroke-width:10px
}
50% {
  fill:${colorTwo};
  stroke-width:2px
}
100%{
  fill:${colorOne};
  stroke-width:10px
}
`;
const StyledCircle = styled.svg`
  margin: auto;
  display: inline-block;
`;
const StyledInnerCircle = styled.circle`
  animation: ${props => circlePulse(props.colorOne, props.colorTwo)} infinite 4s
    linear;
`;







export default class main extends Component {
  render() {
    const images = [
      slide_23,
      slide_22,
      slide_14, 
      slide_15, 
      slide_16, 
      slide_17,
      slide_18, 
      slide_19, 
      slide_25,
      slide_21,
      slide_20, 
       
      slide_24, 
      slide_13, 
      slide_11, 
      slide_5,
      slide_6,
      slide_7,
      //slide_8,
      //slide_9, 
      slide_10, 
      //slide_2,
      slide_12, 
      // slide_3,
      // slide_4,
      
     ];
 
  
  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
   
  }


return (
<div>

    
     
  
  <video
  autoPlay
  loop
  muted
  style={{position:"absolute",height:window.innerHeight,width:window.innerWidth, zIndex:-1,objectFit:"cover",transform:"translate:(-50%,-50%)"}}
  >
    <source src={video_1} type="video/mp4"></source>
  </video>


<div style={{
    marginTop:58, 
     Width:window.innerWidth,
    // backgroundImage: `url(  ${ images[0] }  )` ,
   // marginTop:theme.spacing(),
    minHeight:window.innerHeight*0.8,
    maxHeight:window.innerHeight*0.9,
    width:'auto',
    }}>

  
        <Typography style={{fontSize:40, direction:"rtl",display: 'flex',paddingTop:window.innerHeight*0.05,justifyContent: 'center',color: "#cc0000"}}>
          בית הכנסת 
        </Typography>
 
        <Typography 
        style={{
          direction:"rtl",
          display: 'flex',
          justifyContent: 'center',
          fontSize:40,
          color:"#cc0000"
          }}> 
                   "אהבת ישראל"
        </Typography>


          <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft:window.innerWidth*0.03,
            marginTop:(window.innerWidth>600)?window.innerWidth*0.02:-window.innerHeight*0.1,
            
          }}
          >
            <Sedor style={{
              width:(window.innerWidth>600)?window.innerWidth*0.5:window.innerWidth*0.8,
              height:(window.innerWidth>600)?window.innerHeight*0.7:window.innerHeight*0.9,         
             }}></Sedor>
        </div>
 </div>      

  <div style={{
    paddingTop:80, 
     Width:window.innerWidth,
     minWidth:window.innerWidth,
    // backgroundImage: `url(  ${ images[0] }  )` ,
   // marginTop:theme.spacing(),
    //minHeight:window.innerHeight,
    width:'auto',
    zIndex:-1,
    //height:window.innerhight,
    // zIndex:-1,
    // backgroundImage: `url(${stars})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // minHeight: window.innerHeight,
   background: `linear-gradient(#0f0c29, #24243e)`

    //   //backgroundPosition: 'center',
    //    backgroundSize:"100% 95%",
    //   backgroundRepeat: 'no-repeat',
    }}>
   
    {/* <Divider style={{paddingTop:5,width: window.innerWidth*0.5}}/> */}



    <div style={{paddingTop:window.innerHeight*0.01,display:"flex", justifyContent: 'flex-end',flexDirection:"column"}}>
      
    <div>
    <Typography style={{direction:"rtl",paddingTop:10,paddingRight:window.innerWidth*0.02,paddingLeft:window.innerWidth*0.06,color:"#ff9933"}}  variant="h4">
          רקע כללי
      </Typography>
        <div style={{display:"flex", justifyContent: 'flex-end'}}>
          <Typography style={{ paddingLeft:window.innerWidth*0.06,paddingRight:window.innerWidth*0.02,paddingTop:10 ,paddingBottom:2,color:"#fff", direction:"rtl",maxWidth:1000}}  variant="h6">
          במזרח גוש עציון למרגלות ההרדיון, על ספר מדבר יהודה, נמצא הישוב הפסטורלי נוקדים ובו בית הכנסת אהבת ישראל. 
          הישוב מונה כיום כ-300 משפחות המנהלות אורח חיים קהילתי מגוון 
          המעניק תחושת אחדות הבנה וכבוד הדדי בין אופיין הייחודי של המשפחות.
          </Typography>
        </div>

        <div style={{display:"flex", justifyContent: 'flex-end'}}>
          <Typography style={{ paddingBottom:window.innerHeight*0.1,paddingLeft:window.innerWidth*0.06,paddingRight:window.innerWidth*0.02,paddingTop:10 ,color:"#fff", direction:"rtl",maxWidth:1000}}  variant="h6">
          היישוב הוקם בשנת 1982 דרומית-מזרחית לעיר בית לחם ליד הרודיון על ידי קבוצת משפחות מהיישובים הסמוכים תקוע ומירושלים. המתיישבים הראשונים קראו ליישובם אל-דוד על שמם של שניים מתושבי תקוע שנפלו: אליהו פרסמן, שנפל במלחמת לבנון הראשונה ודוד רוזנפלד, שנרצח בעת שאירח בדווים מהסביבה תוך כדי עבודתו כשומר בהרודיון. בתחילה התגוררו תושבי המקום בקרוונים באזור שקיבל את הכינוי "היישוב הזמני", שבו שוכן כיום כפר אלדד. לאחר כעשר שנים, בהן התגוררו התושבים בקרוונים, עבר היישוב למקום הקבע על השפה הצפונית של נחל תקוע. היישוב משקיף על נוף מדבר יהודה והרי מואב ממזרח, על נופה ההררי של נפת חברון ממערב ועל הרודיון מצפון. שם היישוב שונה על ידי ועדת השמות הממשלתית ל"נוקדים" (מגדלי צאן), ככתוב על מקצועו של הנביא עמוס אשר היה מתקוע: "דִּבְרֵי עָמוֹס, אֲשֶׁר-הָיָה בַנֹּקְדִים מִתְּקוֹעַ" (עמוס, א', א').
          </Typography>
        </div>

        {/* <Typography style={{direction:"rtl",paddingRight:window.innerWidth*0.02,paddingBottom:window.innerHeight*0.02,color:"#ff9933"}}  variant="h5">
         גלריית תמונות
      </Typography> */}

      </div>



  

    </div>
  </div>
  <Zoom {...zoomInProperties} transitionDuration={500} style={{width:window.innerWidth}}>
        {images.map((each, index) => 
        {return (
          <div key={index} style={{width: '100%'}}>
            <img style={{ objectFit: "cover", width: '100%',height:(window.innerWidth>650)?window.innerHeight*0.75:window.innerHeight*0.6 }} src={each}/>
          </div>
        )})}
      </Zoom>



 
     <div 
    style={{
      marginRight:window.innerWidth*0.02,
      marginTop:window.innerHeight*0.05,
      marginLeft:window.innerWidth*0.03,
       //background: `linear-gradient(#0f0c29, #24243e)`
      //marginTop:window.innerHeight*0.02,
      Width:1100,
      //height:900,
      // display:"flex",
      // flexDirection:"column", 
      // flexWrap:"wrap",
      //minHeight: (window.innerHeight>800)?window.innerHeight:0,
      //marginBottom:window.innerHeight*0.02
      }}>
    
  

    <div style={{display:"flex", justifyContent: 'flex-end',flexDirection:"row"}}>

        <div style={{display:"flex",flexDirection:"column"}}>

            <Typography style={{ paddingRight:window.innerWidth*0.02 ,direction:"rtl",maxWidth:1000}}  variant="h5">
            צריך להראות את הדרך איך נכנסים אל הטרקלין - דרך השער. השער הוא האלהות המתגלה בעולם, בעולם בכל יפיו והדרו, בכל רוח ונשמה, בכל חי ורמש, בכל צמח ופרח, בכל גוי וממלכה, בים וגליו, בשפרירי שחק ובהדרת המאורות, בכשרונות כל שיח, ברעיונות כל סופר, בדמיונות כל משורר ובהגיונות כל חושב, בהרגשת כל מרגיש ובסערת גבורה של כל גבור.
            </Typography>
            <Typography style={{ paddingRight:window.innerWidth*0.02,paddingTop:10 , direction:"rtl",maxWidth:1000}}  variant="h5">
                האלהות העליונה, שאנו משתוקקים להגיע אליה, להבלע בקרבה, להאסף אל אורה, ואין אנו יכולים לבוא למדה זו של מלוי תשוקתנו, יורדת היא בעצמה בשבילנו אל העולם ובתוכו, ואנו מוצאים אותה ומתענגים באהבתה, מוצאים מרגע ושלום במנוחתה. ולפרקים תפקדנו בברק עליון מזיו של מעלה מאור עליון שמעל כל רעיון ומחשבה. השמים נפתחים ואנו רואים מראות אלהים, -

              אבל אנו יודעים שזהו מצב ארעי לנו, הברק יחלף והננו יורדים לשבת עוד לא בפנים ההיכל כי אם בחצרות ד'
            </Typography>
            <Typography style={{direction:"rtl",paddingBottom:window.innerHeight*0.05,paddingRight:window.innerWidth*0.02,paddingTop:10,color:"#ff9933",}}  variant="h5">
                (מתוך מאמר צמאון לקל חי -הרב קוק)
              </Typography>

         </div>
           
        {
         
           (window.innerWidth>800)?(
         
                <YourSvg style={{height:window.innerHeight*0.55,width:window.innerWidth*0.34,paddingTop:50,paddingBottom:30,paddingLeft:window.innerWidth*0.01}}></YourSvg>
           
           ) 
           :<div></div>

        }
     </div>

    

    </div>

    {
          (window.innerWidth<650)? 
          (
              <div style={{background: `linear-gradient(#0f0c29, #24243e)`}}>
                <YourSvg style={{width:window.innerWidth*0.9,paddingTop:window.innerHeight*0.05,paddingBottom:window.innerHeight*0.03,paddingLeft:window.innerWidth*0.053}}></YourSvg>
              </div>
            )
           :<div></div>

         }
</div>
)
}


}


















//   return (
//   <div>
//     <div style={{
//       paddingTop:60, 
//        Width:window.innerWidth,
//       // backgroundImage: `url(  ${ images[0] }  )` ,
//      // marginTop:theme.spacing(),
//       //minHeight:window.innerHeight,
      
//       // zIndex:-1,
//       //height:window.innerhight,
//       // zIndex:-1,
//       // backgroundImage: `url(${stars})`,
//       // backgroundPosition: 'center',
//       // backgroundSize: 'cover',
//       // backgroundRepeat: 'no-repeat',
//       // minHeight: window.innerHeight,
//      //background: `linear-gradient(#0f0c29, #24243e)`

//       //   //backgroundPosition: 'center',
//       //    backgroundSize:"100% 95%",
//       //   backgroundRepeat: 'no-repeat',
//       }}>
     
//       {/* <Divider style={{paddingTop:5,width: window.innerWidth*0.5}}/> */}



//       <div style={{display:"flex", justifyContent: 'flex-end',flexDirection:(window.innerWidth>1000)?"row":"column"}}>
        
//       <Card 
//     style={{
//       marginRight:window.innerWidth*0.02,
//       //marginBottom:window.innerWidth*0.02,
//       marginLeft:window.innerWidth*0.03,
//       marginTop:window.innerHeight*0.02,
//       Width:1100,
//       //height:900,
//       // display:"flex",
//       // flexDirection:"column", 
//       // flexWrap:"wrap",
//       //minHeight:window.innerHeight,
//       //marginBottom:window.innerHeight*0.02
//       }}>

//       <Zoom {...zoomInProperties} transitionDuration={1000} style={{width: window.innerWidth}}>
//           {images.map((each, index) => 
//           {return (
//             <div key={index} style={{width: window.innerWidth}}>
//               <img style={{ objectFit: "cover", width: '100%',height:(window.innerWidth>1000)?window.innerHeight*0.816:window.innerHeight*0.55 }} src={each}/>
//             </div>
//           )})}
//         </Zoom>
//           {/* <div>
//             <Typography style={{direction:"rtl",paddingTop:10,paddingRight:window.innerWidth*0.02,paddingLeft:window.innerWidth*0.06,color:"#fff"}}  variant="h5">
//             רקע כללי
//           </Typography>
    
//           <Typography style={{direction:"rtl",paddingBottom:2,paddingRight:window.innerWidth*0.02,paddingLeft:window.innerWidth*0.06,paddingTop:10,color:"#fff"}}  variant="h5">
//             בית הכנסת "אהבת ישראל"
//           </Typography>
//           <div style={{display:"flex", justifyContent: 'flex-end'}}>
//             <Typography style={{ paddingLeft:window.innerWidth*0.06,paddingRight:window.innerWidth*0.02,paddingTop:10 ,paddingBottom:2,color:"#fff", direction:"rtl",maxWidth:1000}}  variant="h5">
//             במזרח גוש עציון למרגלות ההרדיון, על ספר מדבר יהודה, נמצא הישוב הפסטורלי נוקדים ובו בית הכנסת אהבת ישראל. 
//             הישוב מונה כיום כ-300 משפחות המנהלות אורח חיים קהילתי מגוון 
//             המעניק תחושת אחדות הבנה וכבוד הדדי בין אופיין הייחודי של המשפחות.
//             </Typography>
//           </div>

//           {/* <div style={{display:"flex", justifyContent: 'flex-end'}}>
//             <Typography style={{ paddingBottom:window.innerHeight*0.1,paddingLeft:window.innerWidth*0.06,paddingRight:window.innerWidth*0.02,paddingTop:10 ,color:"#fff", direction:"rtl",maxWidth:1000}}  variant="h5">
//             היישוב הוקם בשנת 1982 דרומית-מזרחית לעיר בית לחם ליד הרודיון על ידי קבוצת משפחות מהיישובים הסמוכים תקוע ומירושלים. המתיישבים הראשונים קראו ליישובם אל-דוד על שמם של שניים מתושבי תקוע שנפלו: אליהו פרסמן, שנפל במלחמת לבנון הראשונה ודוד רוזנפלד, שנרצח בעת שאירח בדווים מהסביבה תוך כדי עבודתו כשומר בהרודיון. בתחילה התגוררו תושבי המקום בקרוונים באזור שקיבל את הכינוי "היישוב הזמני", שבו שוכן כיום כפר אלדד. לאחר כעשר שנים, בהן התגוררו התושבים בקרוונים, עבר היישוב למקום הקבע על השפה הצפונית של נחל תקוע. היישוב משקיף על נוף מדבר יהודה והרי מואב ממזרח, על נופה ההררי של נפת חברון ממערב ועל הרודיון מצפון. שם היישוב שונה על ידי ועדת השמות הממשלתית ל"נוקדים" (מגדלי צאן), ככתוב על מקצועו של הנביא עמוס אשר היה מתקוע: "דִּבְרֵי עָמוֹס, אֲשֶׁר-הָיָה בַנֹּקְדִים מִתְּקוֹעַ" (עמוס, א', א').
//             </Typography>
//           </div> }


//         </div> */}
//       </Card>
//       </div>

      
     


//     </div>

//     <Card 
//     style={{
//       marginRight:window.innerWidth*0.02,
//       marginTop:window.innerWidth*0.08,
//       marginLeft:window.innerWidth*0.03,
//        //background: `linear-gradient(#0f0c29, #24243e)`
//       //marginTop:window.innerHeight*0.02,
//       Width:1100,
//       //height:900,
//       // display:"flex",
//       // flexDirection:"column", 
//       // flexWrap:"wrap",
//       minHeight: (window.innerHeight>800)?window.innerHeight:0,
//       //marginBottom:window.innerHeight*0.02
//       }}>
    
  

//     <div style={{display:"flex", justifyContent: 'flex-end',flexDirection:"row"}}>

//         <div style={{minHeight: (window.innerHeight>800)?window.innerHeight:0,display:"flex",flexDirection:"column"}}>

//             <Typography style={{ paddingRight:window.innerWidth*0.02 ,direction:"rtl",maxWidth:1000}}  variant="h5">
//             צריך להראות את הדרך איך נכנסים אל הטרקלין - דרך השער. השער הוא האלהות המתגלה בעולם, בעולם בכל יפיו והדרו, בכל רוח ונשמה, בכל חי ורמש, בכל צמח ופרח, בכל גוי וממלכה, בים וגליו, בשפרירי שחק ובהדרת המאורות, בכשרונות כל שיח, ברעיונות כל סופר, בדמיונות כל משורר ובהגיונות כל חושב, בהרגשת כל מרגיש ובסערת גבורה של כל גבור.
//             </Typography>
//             <Typography style={{ paddingRight:window.innerWidth*0.02,paddingTop:10 , direction:"rtl",maxWidth:1000}}  variant="h5">
//                 האלהות העליונה, שאנו משתוקקים להגיע אליה, להבלע בקרבה, להאסף אל אורה, ואין אנו יכולים לבוא למדה זו של מלוי תשוקתנו, יורדת היא בעצמה בשבילנו אל העולם ובתוכו, ואנו מוצאים אותה ומתענגים באהבתה, מוצאים מרגע ושלום במנוחתה. ולפרקים תפקדנו בברק עליון מזיו של מעלה מאור עליון שמעל כל רעיון ומחשבה. השמים נפתחים ואנו רואים מראות אלהים, -

//               אבל אנו יודעים שזהו מצב ארעי לנו, הברק יחלף והננו יורדים לשבת עוד לא בפנים ההיכל כי אם בחצרות ד'
//             </Typography>
//             <Typography style={{direction:"rtl",paddingBottom:window.innerHeight*0,paddingRight:window.innerWidth*0.02,paddingTop:10,color:"#ff9933",}}  variant="h5">
//                 (מתוך מאמר צמאון לקל חי -הרב קוק)
//               </Typography>

//         </div>
           
//         {
//           (window.innerWidth>800)? <YourSvg style={{height:window.innerHeight*0.55,width:window.innerWidth*0.34,paddingTop:50,paddingBottom:30,paddingLeft:window.innerWidth*0.01}}></YourSvg>
//           :<div></div>

//         }
//     </div>

//       {
//           (window.innerWidth<650)? <YourSvg style={{height:window.innerHeight*0.9,width:window.innerWidth*0.9,paddingTop:-window.innerHeight*0,paddingBottom:window.innerHeight*0.03,paddingLeft:window.innerWidth*0.01}}></YourSvg>
//           :<div></div>

//         }

//     </Card>
//   </div>
//   )
// }

