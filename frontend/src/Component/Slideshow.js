import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide_2 from './images/slide_2.jpg';
import slide_3 from './images/slide_3.jpg';
import slide_4 from './images/slide_4.jpg';
import Rabbi from './images/rabbi.jpg';
import { withStyles,Card,Typography,Accordion,
  AccordionSummary ,AccordionDetails,Paper  } from '@material-ui/core';
  import Divider from '@material-ui/core/Divider';
  import { ReactComponent as YourSvg } from './svg/torah.svg';
 
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
  <div>
    <div style={{
      paddingTop:80, 
       Width:window.innerWidth,
      // backgroundImage: `url(  ${ images[0] }  )` ,
     // marginTop:theme.spacing(),
      minHeight:window.innerHeight,
      width:'auto',
      zIndex:-1,
      //height:window.innerhight,
     
      background: `linear-gradient(#0f0c29, #24243e)`
      //   //backgroundPosition: 'center',
      //    backgroundSize:"100% 95%",
      //   backgroundRepeat: 'no-repeat',
      }}>
     
      {/* <Divider style={{paddingTop:5,width: window.innerWidth*0.5}}/> */}



      <div style={{paddingTop:50,display:"flex", justifyContent: 'flex-end',flexDirection:(window.innerWidth>1000)?"row":"column-reverse"}}>
        
      <Zoom {...zoomInProperties} transitionDuration={500} style={{width: window.innerWidth,maxWidth:1000,paddingRight:(window.innerHeight>900)?window.innerWidth*0.06:0}}>
          {images.map((each, index) => 
          {return (
            <div key={index} style={{width: '100%'}}>
              <img style={{ objectFit: "cover", width: '100%',height:(window.innerWidth>1000)?window.innerHeight*0.9:window.innerHeight*0.55 }} src={each}/>
            </div>
          )})}
        </Zoom>
          <div>
            <Typography style={{direction:"rtl",paddingTop:10,paddingRight:window.innerWidth*0.02,paddingLeft:window.innerWidth*0.06,color:"#fff"}}  variant="h5">
            רקע כללי
          </Typography>
    
          <Typography style={{direction:"rtl",paddingBottom:30,paddingRight:window.innerWidth*0.02,paddingLeft:window.innerWidth*0.06,paddingTop:10,color:"#fff"}}  variant="h5">
            בית הכנסת "אהבת ישראל"
          </Typography>
          <div style={{display:"flex", justifyContent: 'flex-end'}}>
            <Typography style={{ paddingLeft:window.innerWidth*0.06,paddingRight:window.innerWidth*0.02,paddingTop:10 ,paddingBottom:30,color:"#fff", direction:"rtl",maxWidth:1000}}  variant="h5">
            במזרח גוש עציון למרגלות ההרדיון, על ספר מדבר יהודה, נמצא הישוב הפסטורלי נוקדים ובו בית הכנסת אהבת ישראל. 
            הישוב הוקם בשנת 1982 ומונה כיום כ-300 משפחות המנהלות אורח חיים קהילתי מגוון 
            המעניק תחושת אחדות הבנה וכבוד הדדי בין אופיין הייחודי של המשפחות.
            </Typography>
          </div>

          <div style={{display:"flex", justifyContent: 'flex-end'}}>
            <Typography style={{ paddingBottom:window.innerHeight*0.1,paddingLeft:window.innerWidth*0.06,paddingRight:window.innerWidth*0.02,paddingTop:10 ,color:"#fff", direction:"rtl",maxWidth:1000}}  variant="h5">
            היישוב הוקם בשנת 1982 דרומית-מזרחית לעיר בית לחם ליד הרודיון על ידי קבוצת משפחות מהיישובים הסמוכים תקוע ומירושלים. המתיישבים הראשונים קראו ליישובם אל-דוד על שמם של שניים מתושבי תקוע שנפלו: אליהו פרסמן, שנפל במלחמת לבנון הראשונה ודוד רוזנפלד, שנרצח בעת שאירח בדווים מהסביבה תוך כדי עבודתו כשומר בהרודיון. בתחילה התגוררו תושבי המקום בקרוונים באזור שקיבל את הכינוי "היישוב הזמני", שבו שוכן כיום כפר אלדד. לאחר כעשר שנים, בהן התגוררו התושבים בקרוונים, עבר היישוב למקום הקבע על השפה הצפונית של נחל תקוע. היישוב משקיף על נוף מדבר יהודה והרי מואב ממזרח, על נופה ההררי של נפת חברון ממערב ועל הרודיון מצפון. שם היישוב שונה על ידי ועדת השמות הממשלתית ל"נוקדים" (מגדלי צאן), ככתוב על מקצועו של הנביא עמוס אשר היה מתקוע: "דִּבְרֵי עָמוֹס, אֲשֶׁר-הָיָה בַנֹּקְדִים מִתְּקוֹעַ" (עמוס, א', א').
            </Typography>
          </div>


        </div>
       

        



      </div>

      
     


    </div>

    <Paper style={{hight:900,display:"flex",flexDirection:"column", minHeight:window.innerHeight,}}>
   

    <div style={{display:"flex", justifyContent: 'flex-end',flexDirection:"row"}}>

      


        <div style={{display:"flex",flexDirection:"column",paddingTop:50}}>

            <Typography style={{ paddingRight:window.innerWidth*0.02,paddingTop:10 ,direction:"rtl",maxWidth:1000}}  variant="h5">
            צריך להראות את הדרך איך נכנסים אל הטרקלין - דרך השער. השער הוא האלהות המתגלה בעולם, בעולם בכל יפיו והדרו, בכל רוח ונשמה, בכל חי ורמש, בכל צמח ופרח, בכל גוי וממלכה, בים וגליו, בשפרירי שחק ובהדרת המאורות, בכשרונות כל שיח, ברעיונות כל סופר, בדמיונות כל משורר ובהגיונות כל חושב, בהרגשת כל מרגיש ובסערת גבורה של כל גבור.
            </Typography>
            <Typography style={{ paddingRight:window.innerWidth*0.02,paddingTop:10 , direction:"rtl",maxWidth:1000}}  variant="h5">
                האלהות העליונה, שאנו משתוקקים להגיע אליה, להבלע בקרבה, להאסף אל אורה, ואין אנו יכולים לבוא למדה זו של מלוי תשוקתנו, יורדת היא בעצמה בשבילנו אל העולם ובתוכו, ואנו מוצאים אותה ומתענגים באהבתה, מוצאים מרגע ושלום במנוחתה. ולפרקים תפקדנו בברק עליון מזיו של מעלה מאור עליון שמעל כל רעיון ומחשבה. השמים נפתחים ואנו רואים מראות אלהים, -

              אבל אנו יודעים שזהו מצב ארעי לנו, הברק יחלף והננו יורדים לשבת עוד לא בפנים ההיכל כי אם בחצרות ד'
            </Typography>
            <Typography style={{direction:"rtl",paddingRight:window.innerWidth*0.02,paddingTop:10,color:"#ff9933",}}  variant="h5">
                (מתוך מאמר צמאון לקל חי -הרב קוק)
              </Typography>

        </div>
           
        {
          (window.innerWidth>1200)? <YourSvg style={{height:window.innerHeight*0.55,width:window.innerWidth*0.34,paddingTop:50,paddingBottom:30,paddingLeft:window.innerWidth*0.01}}></YourSvg>
          :<div></div>

        }
    </div>

    </Paper>
  </div>
  )
}

export default Slideshow;