import React, { Component } from 'react'
import { withStyles,FormControlLabel,Typography,TextField,
    Button ,Fab, Avatar,Box,  } from '@material-ui/core';
    import AddIcon from '@material-ui/icons/Add';
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
import '../css/ShowMessage.scss';
import { ThemeProvider } from 'styled-components';
import logo from '../svg/5.svg';
  const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
  })
export default class ShowMessage extends Component {

    constructor(props) {
        super(props);
        this.calcWeek = this.calcWeek.bind(this);
        this.calcMonth = this.calcMonth.bind(this);
        //this.calcYear = this.calcYear.bind(this);
        this.state={
            index:0,
            message:[],
            srcNow: video_4,
            showWidht:true,
            flagTimeout:false,
            startTime:new Date(),
            flagOfAxios:true,
            counter:-2,
            chatState:'התחלה',
            modaut:[],
            morningPrayerOfSand:"06:45:00",
            afternoonPrayerOfSand:"עשר דקות לפני השקיעה",
            nightgPrayerOfSand:"20:00:00",
            todayDate:new Date(),
            weekDate:this.calcWeek(new Date()),
            monthDate:this.calcMonth(),
           // yearDate:this.calcYear(),
          
          
        }
       
       
    }
    calcWeek(){
      let week= new Array();
      let todayDate=new Date()
      let start = todayDate.getDay();
   
      // Starting Monday not Sunday
    //  current.setDate((current.getDate() - current.getDay()));
      for (let i = start; i < 6; i++) {
          week.push(
              new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate()+(i-start))
          ); 
      
      }
      
      return week; 
    }
    calcMonth(){
      let month= new Array();
      let todayDate=new Date()
      let start = todayDate.getDate();
      let end =new Date(todayDate.getFullYear(),todayDate.getMonth()+1,0).getDate();
    
      // Starting Monday not Sunday
    //  current.setDate((current.getDate() - current.getDay()));
      for (let i = start; i <= end; i++) {
        month.push(
              new Date(todayDate.getFullYear(),todayDate.getMonth(),todayDate.getDate()+(i-start))
          ); 
      
      }
     
      return month; 

    }
  
    clikStart=()=>{
      this.state.showWidht=true;
      this.state.flagTimeout=true;
    
      
    }
    getNaneOfDate=(month)=>{
     
      switch (month) {
          case 0:
              return 'January';
          break;
          case 1:
            return 'February';
          break;
          case 2:
            return 'March';
          break;
          case 3:
            return 'April';
          break;
          case 4:
            return 'May';
          break;
          case 5:
            return 'June';
          break;
          case 6:
            return 'July';
          break;
          case 7:
            return 'August';
          break;
          case 8:
            return 'September';
          break;
          case 9:
            return 'October';
          break;
          case 10:
            return 'November';
          break;
          case 11:
            return 'December';
          break;
      
          default:
              break;
      }
    }
    sendMessage=(time,message)=>{
      let timeNumber=parseInt(time);
      setTimeout(() => {
        addResponseMessage(message)
      }, 0*timeNumber);
      this.setState((prevState)=>({
        counter:prevState.counter-3
        
      }))
      //console.log(this.state,"this.state")
    }
    handleNewUserMessage = (newMessage) => {
     
      axios.get("https://nokdim-backend.herokuapp.com/presence")
      .then((response)=>response.data)
      .then((res)=>{
      
      })
      .catch((err)=>{
        console.log(err)
      })

      switch (this.state.chatState) {
        case 'התחלה':
          switch (newMessage) {
            case '1':
              if(this.state.modaut.length===0){
                 this.sendMessage("0","כרגע לוח המודעות של בית הכנסת ריק")
                 this.sendMessage("1",`תוכל לבחור במספרים 2 או 3 כדי לקבל שרות נוסף או לכתוב סיימתי במידה ואין לך צורך בהמשך השיחה   `)
                }
               else{
                 this.state.modaut.forEach((element,index) => {
                  
                  this.sendMessage(index,String(element.message))
                 });
                 this.sendMessage("1",`אוקיי סיימתי להציג לך את המודעות של בית הכנסת תוכל לבחור במספרים 1 או 2 או 3 כדי לקבל שרות נוסף או לכתוב סיימתי במידה ואין לך צורך בהמשך השיחה  `)
                 this.sendMessage("1", ` במידה ושחכת מה זה המספרים המוזרים האלה אני מזכיר לך    `)
                 this.sendMessage("1",`1. הצגת מידע`)
                 this.sendMessage("2",`2. לרשום אותך לתפילות בבית הכנסת`)
                this.sendMessage("3",`3. להציג לך מי מגיע לתפילות כדי שתוכל לדעת אם מתקיים מניין בבית הכנסת `)
               } 
              break;
              case '2':
                this.sendMessage("0", `  אוקיי בוא נתחיל בהרשמה -  כמובן שההרשמה היא לתפילות של ימי החול  `)
                this.sendMessage("1", 
                `  במידה ותרצה להירשם לתפילת שחרית ( בשעה    ${this.state.morningPrayerOfSand}  )   תכתוב לי את הספרה 1
                במידה ותרצה להירשם לתפילת מנחה (בשעה    ${this.state.afternoonPrayerOfSand}  )  תכתוב לי את הספרה 2
                במידה ותרצה להירשם לתפילת ערבית( בשעה   ${this.state.nightgPrayerOfSand}   )  תכתוב לי את הספרה 3
                במידה ותרצה להירשם לשלושת התפילות היום תכתוב לי את הספרה 4
                
                `)
                this.sendMessage("2", ` במידה ותרצה לבנות התאמה אישית לתפילות כמו למשל להירשם לתפילות בשבוע/חודש/שנה הקרובים תכתוב לי את הספרה 5 (בתור הרובוט שמדבר איתך נראה לי שזאת האופציה המועדפת)  `)

                 this.state.chatState='הרשמה'
               

              break;
              case '3':
             
              break;
              case 'סיימתי':
                this.sendMessage("0","באסה נהנתי מאוד לדבר איתך")
                this.sendMessage("0","המשך יום קסום ולהתראות")
                this.sendMessage("0","במידה ותרצה להתחבר שוב אנא הזן את הסיפרה 0 ואני יחבר אותך שוב")
                this.state.chatState='סיימתי';
              break;
            default:
              break;
          }
          
          break;
      
       case 'הרשמה':

              switch (newMessage) {
                case '1':

                  let data=
                  {
                    month:this.getNaneOfDate(new Date().getMonth()),
                    day:String(new Date().getDate()),
                    obj:{
                        "morningPrayerOfSand":[{"name":"9999999","message":"8888888"},]
                    }
                }
                
                  axios.patch("https://nokdim-backend.herokuapp.com/presence/5fad1d96fd695d00179029cf",data)
                  .then((response) => response.data)
                  .then((res) => {
                    console.log(res,"res")
                      // if(res.message === 'Auth successful'){
                      //     this.setState({selectedIndex:1})
                      // }
                      this.sendMessage("0", ` אוקיי אני רושם אותך לתפילת שחרית בשעה  ${this.state.morningPrayerOfSand}  ` )

            
                      }).catch(err => {
                        console.log(err)
                      })

                break;

                case '2':
                  this.sendMessage("0", ` אוקיי אני רושם אותך לתפילת מנחה בשעה  ${this.state.afternoonPrayerOfSand}  ` )
                break;

                case '3':
                  this.sendMessage("0", ` אוקיי אני רושם אותך לתפילת ערבית בשעה  ${this.state.nightgPrayerOfSand}  ` )
                break;

                case '4':
                  this.sendMessage("0", ` אוקיי אני רושם אותך לתפילת ערבית בשעה  ${this.state.nightgPrayerOfSand}  ` )
                break;
              
                default:
                  break;
              }

         break;
        case 'סיימתי':
          if(newMessage !=='כן'){
            this.sendMessage("0","לפי מה שהבנתי ממך ביקשת לסיים את השיחה כיף לשמוע שאולי אתה צריך שירות נוסף")
            this.sendMessage("1","במידה ותרצה לחדש את השיחה תכתוב לי את המילה כן ואני יחבר אותך")
          }
          if(newMessage ==='0'){
            this.sendMessage("0","כיף לשמוע שאתה צריך שרות נוסף אני יציג בפנייך שוב את הפועלות שאני יודע לבצע");
            this.sendMessage("1",`1. הצגת מידע`)
            this.sendMessage("2",`2. לרשום אותך לתפילות בבית הכנסת`)
           this.sendMessage("3",`3. להציג לך מי מגיע לתפילות כדי שתוכל לדעת אם מתקיים מניין בבית הכנסת `)
           this.sendMessage("4",`אנא הזן את המספרים 1 או 2 או 3 כדי לקבל את השירות המתאים `)
          
          this.state.chatState="התחלה"
        }

          break;







        default:
          break;
      }
    }
    componentDidMount() {
      if(this.props.counterOfAxios<2){
        this.state.counter=-5;
      }
      this.sendMessage("0","היי")
      this.sendMessage("1","אני הרובוט של בית הכנסת אהבת ישראל")
     
      this.sendMessage("2",`אני יודע לבצע את הפעולות הבאות `)
      this.sendMessage("3",`1. הצגת מידע`)
      this.sendMessage("4",`2. לרשום אותך לתפילות בבית הכנסת`)
      this.sendMessage("5",`3. להציג לך מי מגיע לתפילות כדי שתוכל לדעת אם מתקיים מניין בבית הכנסת `)
      this.sendMessage("6",`אנא הזן את המספרים 1 או 2 או 3 כדי לקבל את השירות המתאים `)
      
  
     
      if(this.props.counterOfAxios<2){
      
        //console.log(this.props.counterOfAxios,"this.props.counterOfAxios")
        axios.get("https://nokdim-backend.herokuapp.com/message")
        .then((response) => response.data)
        .then((res) =>{
       
           this.state.modaut=res.messages;
           this.state.flagOfAxios=false;
            // this.setState({message:res.messages})
            this.forceUpdate();
            
        }).catch((err)=>{
            console.log(err)
        })
      }
       
        
     
        
      
        
      }
  
  getCustomLauncher=(handleToggle) =>{
   
    this.state.counter= this.state.counter+1;
   // console.log(this.state.counter,"handleToggle")

    // let endTime = new Date();
    // let timeDiff = endTime - this.state.startTime; //in ms
    // // strip the ms
    // timeDiff /= 1000;
    // console.log(timeDiff,"timeDiff")
    if(this.state.counter===1){
    
      this.state.showWidht=false;
      this.forceUpdate();
    }
   
  }

      componentWillMount(){
        toggleWidget();
      }
      
   
    render() {
        return (
            <div>
                <video
               // ref={this.myRef}
                autoPlay
                muted
                style={{position:"absolute",top:0,height:window.innerHeight,width:window.innerWidth, zIndex:-1,objectFit:"cover"}}
                >
                    <source src={this.state.srcNow} type="video/mp4"></source>
                </video>
          {/* {console.log(this.state.showWidht,"this.state.showWidht")}      */}
 {

   
    this.state.showWidht===true?
    (
      <Widget
              //fullScreenMode
              class
              launcher={handleToggle => this.getCustomLauncher(handleToggle)}
              senderPlaceHolder="הקלד/י הודעה"
              showTimeStamp
              //launcher={()=>{return true}}
              handleSubmit={(()=>{this.state.counter=this.state.counter-3})}
              autofocus
              launcherOpenLabel
              sendButtonAlt
              profileAvatar={logo}
              handleNewUserMessage={this.handleNewUserMessage}
            // profileAvatar={logo}
              title="לוח מודעות "
              subtitle="מתעדכן על ידי הגבאי"
            />
    ):(<div/>
   )
          
 }
 

 


<div style={{
   // marginTop:58, 
     Width:window.innerWidth,
     zIndex:-1,
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
 </div> 


                  
            </div>
        )
    }
}


























































 {/* <Fab  onClick={this.clikStart} color="primary" aria-label="add" style={{pozition:"absulote",bottom:0,right:12}}>
        <AddIcon />
      </Fab>
 <Button 
      style={{pozition:"absulote",bottom:0,right:12}}
      variant="contained" 
      fullWidth
      color="primary" 
      onClick={this.clikStart}> לחץ כאן כדי לחזור לצאט</Button> */}
        {/* <img style={{ 
                           objectFit: "cover",
                            width: '100%',
                            height:(window.innerWidth>650)?window.innerHeight*0.75:window.innerHeight*0.6,
                            zIndex:-1
                            }} src={slide_17}/> */}
 
                {/* {
                     this.state.message.length>0?(
                        this.state.message.slice(0).reverse().map((val,index)=>{
                            return(
    
                                <ExpansionPanel 
                                dir="rtl" 
                               defaultExpanded={(index<3)?true:false}
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
                                    <Typography>{val.user}</Typography>
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
                  
                } */}