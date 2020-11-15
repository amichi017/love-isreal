import React, { Component } from 'react'
import { withStyles,FormControlLabel,Typography,TextField,
    CssBaseline ,Button, Avatar,Checkbox,  } from '@material-ui/core';
    import bg from '../images/bg.jpg';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import video_1 from '../video/video_1.mp4';
import video_2 from '../video/video_2.mp4';
import video_3 from '../video/video_3.mp4';
import video_4 from '../video/video_4.mp4';
import video_5 from '../video/video_5.mp4';
import slide_11 from '../images/slide_11.jpg';
import { ReactComponent as YourSvg } from '../svg/torah.svg';
import { Widget,addResponseMessage ,toggleWidget } from 'react-chat-widget';
import { ReactComponent as Sedor } from '../svg/sedor.svg';
import 'react-chat-widget/lib/styles.css';


  const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
  })
export default class ShowMessage extends Component {

    constructor(props) {
        super(props);
        this.state={
          index:0,
            message:[],
            srcNow: video_4,
          
        }
       
    }
    handleNewUserMessage = (newMessage) => {


      addResponseMessage('רק הגבאי יכול לשלוח הודעות לכן ההודעה לא תישמר במערכת')
    // if(this.state.index===0 || this.state.index===1){
     // addResponseMessage('רק הגבאי יכול לשלוח הודעות לכן ההודעה לא תישמר במערכת')
  // }
  //      if(this.state.index===2){
  //     addResponseMessage('רק הגבאי יכול לשלוח הודעות לכן ההודעה הבאה לא תוצג על המסך  ')
  //   }
  //   this.setState(prevState =>{
  //     return{
  //          ...prevState,
  //          index : prevState.index +1
  //     }
  //  })
      // Now send the message throught the backend API
    }
    componentDidMount() {
    
        axios.get("https://nokdim-backend.herokuapp.com/message")
        .then((response) => response.data)
        .then((res) =>{
            console.log(res,"res")
            res.messages.forEach(element => {
              this.state.message.push(element)
            });
            // this.setState({message:res.messages})
            this.forceUpdate();
            
        }).catch((err)=>{
            console.log(err)
        })
        
     
        
      
        
      }
      ButtonClicked=(c)=>{
        console.log("c")

      }
      componentWillMount(){

        toggleWidget();


      }
   
    render() {
        return (
            <div style={{
                  //display:"flex",
                 // flexDirection:"row"
            //     Width:window.innerWidth,
                position:"absolute",
                top:0,
            //     minWidth:window.innerWidth,
            //    backgroundImage: `url(  ${ slide_11 }  )` ,
            //       backgroundSize: 'cover',
            //     backgroundRepeat: 'no-repeat',
              //marginTop:theme.spacing(),
               minHeight:window.innerHeight,
            //    //background: `linear-gradient(#0f0c29, #24243e)`,
             //  width:'auto',
               zIndex:-1,
            }}>
                <video
               // ref={this.myRef}
                autoPlay
                muted
                style={{position:"absolute",top:0,height:window.innerHeight,width:window.innerWidth, zIndex:-1,objectFit:"cover"}}
                >
                    <source src={this.state.srcNow} type="video/mp4"></source>
                </video>
                       {/* <img style={{ 
                           objectFit: "cover",
                            width: '100%',
                            height:(window.innerWidth>650)?window.innerHeight*0.75:window.innerHeight*0.6,
                            zIndex:-1
                            }} src={slide_17}/> */}
 
                {
                     this.state.message.length>0?(
                        this.state.message.map((val,index)=>{
                            return(
    
                                <ExpansionPanel 
                                dir="rtl" 
                               defaultExpanded={true}
                               style={{
                                   maxWidth:window.innerWidth<650?window.innerWidth*0.9:850,
                                   marginLeft:window.innerWidth<650?window.innerWidth*0.05:window.innerWidth*0.05,
                                  marginTop:(index===0)?window.innerHeight*0.18:window.innerHeight*0.01,
                                  marginBottom:(index===this.state.message.length-1)?window.innerHeight*0.2:0,
                                  
                                     }}
                               >
                                  <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    expanded
                                    style={{backgroundColor:(index%2===0)?'#ffff':'#1212',color:"#ff9933"}}
                                  >
                                    <Typography>
                                    <Typography>{`כותב ההודעה : ${val.user}`} </Typography>
                                    <Typography>{`תאריך כתיבת ההודעה: ${val.date.toString().substring(0,4)} / ${val.date.toString().substring(5,7)}  / ${val.date.toString().substring(8,10)} `} </Typography>
                                     

                                    </Typography>
                                    
                                  </ExpansionPanelSummary>
                                  <ExpansionPanelDetails style={{backgroundColor:(index%2===0)?'#ffff':'#1212'}}>
                                    <Typography>
                                      {val.message}
                                    </Typography>
                                  </ExpansionPanelDetails>
                                </ExpansionPanel>
                            )
                        })
                     ):(<div></div>)
                      }   
                
 {/* {
          <Widget
          //fullScreenMode
          //launcher={this.ButtonClicked}
          senderPlaceHolder="הקלד/י הודעה"
          showTimeStamp
          //launcher={()=>{return true}}
          autofocus
          launcherOpenLabel
          sendButtonAlt
          handleNewUserMessage={this.handleNewUserMessage}
        // profileAvatar={logo}
          title="הודעות לבית הכנסת"
          subtitle="מתעדכן על ידי הגבאי"
         />
 } */}
 {
         (window.innerWidth>800)?(
       
              <YourSvg style={{position:"absolute",top:20,right:20, height:window.innerHeight*0.55,paddingTop:50,paddingBottom:30,paddingLeft:window.innerWidth*0.01}}></YourSvg>
         
         ) 
         :<div></div>

      }

    



{/* <div style={{
   // marginTop:58, 
     Width:window.innerWidth,
    // backgroundImage: `url(  ${ images[0] }  )` ,
   // marginTop:theme.spacing(),
    minHeight:window.innerHeight,
    maxHeight:window.innerHeight,
    width:'auto',
    backgroundColor: 'rgba(0,0,0,0.5)',
    }}>

  
        <Typography style={{fontSize:40, direction:"rtl",display: 'flex',paddingTop:(window.innerWidth>600)?window.innerHeight*0.1:window.innerHeight*0.19,justifyContent: 'center',color: "#cc0000"}}>
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
            marginLeft:(window.innerWidth>600)?window.innerWidth*0.04:window.innerWidth*0.08,
            marginTop:(window.innerWidth>600)?window.innerWidth*0.02:-window.innerHeight*0.1,
            
          }}
          >
            <Sedor style={{
              width:(window.innerWidth>600)?window.innerWidth*0.5:window.innerWidth*0.8,
              height:(window.innerWidth>600)?window.innerHeight*0.7:window.innerHeight*0.9,         
             }}></Sedor>
        </div>
 </div>  */}
                  
            </div>
        )
    }
}