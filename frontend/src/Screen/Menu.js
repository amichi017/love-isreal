import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import Button from '@material-ui/core/Button';
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
import Map from './Map' 
import Toolbar from '@material-ui/core/Toolbar';
import PrayerHours from './PrayerHours'
import IconButton from '@material-ui/core/IconButton';

import Fab from '@material-ui/core/Fab';

import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo_nokdim from '../images/logo_nokdim.png'
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
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  
  const [state, setState] = React.useState({
    right: false,
  });
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(index)
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
        {['בית כנסת', 'זמני התפילות', 'מפה'].map((text, index) => (
          <ListItem 
          button 
          key={text}
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}
          >
               <ListItemText primary={text} />
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        
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
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
           
          </ListItem>
        ))}
      </List>
      <img src={Logo_nokdim} style={{minHeight:120,minWidth:150, paddingTop:window.innerHeight*0.05,paddingLeft:window.innerHeight*0.03,height:window.innerHeight*0.15,width:window.innerWidth*0.15}} /> 
    </div>
  );

  return (
    <div>
      
    <AppBar position="fixed"  style={{backgroundColor: "#fff"}}>
    <Toolbar >
       <React.Fragment key={'right'} >
          <IconButton edge="start" aria-label="open drawer" onClick={toggleDrawer('right', true)}>    <MenuIcon /> </IconButton>
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
      <IconButton >
     
      </IconButton>

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
    </Toolbar>
  </AppBar>
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

        <Main/>
        
        )
        :<div/> 
      }
    </div>

    <div >
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
        (selectedIndex===2)? 
        (
          
        <Map />
        
        )
        :<div/> 
      }
    </div>

    
    
    </div>
  );
}



