import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {List,Divider,ListItem,ListItemIcon} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';


import RabbiNachman from './RabbiNachman'
import Main from './Main'
import CounterOfTeam from './CounterOfTeam'
import PrayerLoveIsreal from './PrayerLoveIsreal' 
import Rols from './Rols'
import Weather from './Weather' 
import Login from './Login' 
import ShowMessage from './ShowMessage' 


import Toolbar from '@material-ui/core/Toolbar';
import PrayerHours from './PrayerHours'
import IconButton from '@material-ui/core/IconButton';

import Fab from '@material-ui/core/Fab';

import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo_nokdim from '../images/logo_nokdim.png'
import { ReactComponent as One } from '../svg/1.svg';
import { ReactComponent as Tow } from '../svg/2.svg';
import { ReactComponent as Three } from '../svg/3.svg';
import { ReactComponent as Four } from '../svg/4.svg';
import { ReactComponent as Five } from '../svg/5.svg';
import { ReactComponent as Six } from '../svg/6.svg';
import { ReactComponent as Seven } from '../svg/7.svg';
const useStyles = makeStyles({
  list: {
    width: (window.innerWidth>900)?window.innerWidth*0.175:180 ,
   
  },
  fullList: {
    width: 'auto',
  },
  PrayerHours:{
   margimTop:50,
  },
  Slideshow:{
    // margimTop:50,
    // margin:'auto'
  },
  appBar:{
    //color:"#ffb84d"
  }
 
});




export default function Menu() {
const icons=[
  One,Tow,Three,Four,Five,Six,Seven
]
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [iconColor, setIconColor] = React.useState('#ff9900');
  const [buttomColor, setButtomColor] = React.useState('#ff9900');
  const [counterOfAxios, setCounterOfAxios] = React.useState(0);
  const [state, setState] = React.useState({
    right: false,
  });
  const iconsList = (index) => {
   
    switch (index) {
        case 0:
        return (<One style={{
          width:(window.innerWidth>600)?window.innerWidth*0.09:window.innerWidth*0.09,
          height:(window.innerWidth>600)?window.innerHeight*0.09:window.innerHeight*0.09,         
         }}></One>)
        break;
        case 1:
        return (<Tow style={{
          width:(window.innerWidth>600)?window.innerWidth*0.09:window.innerWidth*0.09,
          height:(window.innerWidth>600)?window.innerHeight*0.09:window.innerHeight*0.09,         
         }}></Tow>)
        break;
        case 2:
        return (<Three style={{
          width:(window.innerWidth>600)?window.innerWidth*0.09:window.innerWidth*0.09,
          height:(window.innerWidth>600)?window.innerHeight*0.09:window.innerHeight*0.09,         
         }}></Three>)
        break;
        case 3:
        return (<Four style={{
          width:(window.innerWidth>600)?window.innerWidth*0.09:window.innerWidth*0.09,
          height:(window.innerWidth>600)?window.innerHeight*0.09:window.innerHeight*0.09,         
         }}></Four>)
        break;
        case 4:
        return (<Five style={{
          width:(window.innerWidth>600)?window.innerWidth*0.09:window.innerWidth*0.09,
          height:(window.innerWidth>600)?window.innerHeight*0.09:window.innerHeight*0.09,         
         }}></Five>)
        break;
        case 5:
        return (<Six style={{
          width:(window.innerWidth>600)?window.innerWidth*0.09:window.innerWidth*0.09,
          height:(window.innerWidth>600)?window.innerHeight*0.09:window.innerHeight*0.09,         
         }}></Six>)
        break;
        case 6:
        return (<Seven style={{
          width:(window.innerWidth>600)?window.innerWidth*0.09:window.innerWidth*0.09,
          height:(window.innerWidth>600)?window.innerHeight*0.09:window.innerHeight*0.09,         
         }}></Seven>)
        break;
      
    
      default:
        break;
    }

  }
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if(index===2){
      setCounterOfAxios(counterOfAxios+1)
      console.log(counterOfAxios,"counterOfAxios")
      return;
    }
    // if(index===2 && counterOfAxios===1){
    //   setCounterOfAxios(2)
    // }
    console.log(counterOfAxios,"counterOfAxios")
    console.log(index,"index")
   
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['בית כנסת', 'זמני התפילות',"הודעות למתפללים",].map((text, index) => (
          <ListItem 
          button 
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}
          >
               <ListItemText primary={text} />
            <ListItemIcon>
              {iconsList(index)}
            
              
              </ListItemIcon>
        
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["תפקידים","זמני היום",'תיקון הכללי'].map((text, index) => (
           <ListItem 
           button 
           key={text}
           selected={selectedIndex === index}
           onClick={(event) => handleListItemClick(event, index+5)}
           >
           
             <ListItemText primary={text} />
            <ListItemIcon>{ iconsList(index+4)}</ListItemIcon>
           
          </ListItem>
        ))}
      </List>
      <img src={Logo_nokdim} style={{minHeight:120,minWidth:150, paddingTop:window.innerHeight*0.05,paddingLeft:window.innerHeight*0.03,height:window.innerHeight*0.15,width:window.innerWidth*0.15}} /> 
    </div>
  );

  return (
    <div>
      
    
    
       <React.Fragment key={'right'} >

       { 
       
       
       (selectedIndex===0)? 
       (<Button 
            onClick={()=>{setSelectedIndex(10)}}
            // color="secondary"
            style={{fontSize:25,
              //textDecoration: (iconColor==="#cc0000")?'underline':'none',
               color:buttomColor,
               position:"absolute",
               top:(window.innerWidth>650)?(window.innerHeight*0.02):(window.innerHeight*0.017),
               right:(window.innerWidth>650)?(window.innerWidth*0.02):(window.innerWidth*0.04)}}            
            onMouseMove={()=>{setButtomColor("#cc0000")}}
            onMouseOut={()=>{setButtomColor('#ff9900')}}
            >
              כניסה גבאי
           </Button>)
           :<div></div> 
           }

          <IconButton 
          edge="start" 
          aria-label="open drawer" 
          onClick={toggleDrawer('right', true)}
          style={{color:iconColor,position:"fixed",top:(window.innerWidth>650)?(window.innerHeight*0.016):(-window.innerHeight*0.02),left:(window.innerWidth>650)?(window.innerWidth*0.001):(window.innerWidth*0.035)}}
          onMouseMove={()=>{setIconColor("#cc0000")}}
          onMouseOut={()=>{setIconColor('#ff9900')}}
          >   
           <MenuIcon fontSize="large"
          style={{
            height:(window.innerWidth>650)?window.innerHeight*0.075:window.innerHeight*0.12,
            width:(window.innerWidth>650)?window.innerWidth*0.075:window.innerWidth*0.12,}}/>
             </IconButton>
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>


      {/* <Fab color="secondary" aria-label="add" className={classes.fabButton}>
        <AddIcon />
      </Fab>
      <div className={classes.grow} /> */}


      {/* <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton edge="end" color="inherit">
        <MoreIcon />
      </IconButton> */}
 
  <div className={classes.padding}>
      {
        (selectedIndex===7)? <RabbiNachman/>:<div/> 
      }
    </div>
    
    <div className={classes.PrayerHours}>
      {
        (selectedIndex===6)? <PrayerHours/>:<div/> 
      }
    </div>

    <div className={classes.Slideshow}>
      {
        (selectedIndex===0)? 
        (
          <div>
          <Main/>
          </div>
        
        )
        :<div> </div> 
      }
    </div>

    <div>
      {
        (selectedIndex===5)? 
        (
          
        <Rols/>
        
        )
        :<div/> 
      }
    </div>

    <div >
      {
        (selectedIndex===1)? 
        (
          
        <PrayerLoveIsreal />
        
        )
        :<div/> 
      }
    </div>

    {/* <div >
      {
        (selectedIndex===2)? 
        (
          
        <CounterOfTeam />
        
        )
        :<div/> 
      }
    </div> */}
    <div >
      {
        (selectedIndex===3)? 
        (
          
        <Weather />
        
        )
        :<div/> 
      }
    </div>

    <div >
      {
        (selectedIndex===10)? 
        (
          
        <Login />
        
        )
        :<div/> 
      }
    </div>

    <div >
      {
        (selectedIndex===2)? 
        (
          
        <ShowMessage counterOfAxios={counterOfAxios}/>
        
        )
        :<div/> 
      }
    </div>
    
    </div>
  );
}



