///https://api.sunrise-sunset.org/json?lat=28.6444800&lng=77.216721&date=today
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { ComplexZmanimCalendar, getZmanimJson } from "kosher-zmanim";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { FullscreenExit } from '@material-ui/icons';
const KosherZmanim = require("kosher-zmanim");
let date=new Date();
let str='';
if(date.toString().includes('חורף')){
str+='-2'
}
else{
  str+='-3'
}


const options ={
    date: date,
    timeZoneId: 'Etc/GMT'+str,
   locationName: 'IL',
   latitude: 31.6333308,
   longitude: 35.244064,
   // complexZmanim: true,
   // elevation?: number = 0,
    

}
const zmanim = KosherZmanim.getZmanimJson(options);




const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

const useStyles = makeStyles({
  table: {
    maxWidth: 320,
    marginTop:30,
    paddingTop:30,
   
  },
  tableTow:{
    align:'right',
    maxWidth: 320,
    marginTop:30,
    
    // paddingTop:30,
   
  },
 
  paper:{
    maxWidth: 320,
    marginTop:20,
    margin:'auto',
    display:'flex',
    flexDirection:'column',
    flexWrap:"wrap",
    marginBottom:30,

  },
  paperTyp:{
    maxWidth: 320,
    height:60,
    margin:'auto',
    marginTop:90,
    display:'flex',
    flexDirection:'column',
    flexWrap:"wrap",
    textAlign: 'center',
    backgroundColor: '#3366cc',
    color: '#ffffff',
    
    textSize:40,
  },
  paperTypTow:{
    maxWidth: 320,
    height:60,
    margin:'auto',
    marginTop:45,
    display:'flex',
    flexDirection:'column',
    flexWrap:"wrap",
    textAlign: 'center',
    backgroundColor: '#3366cc',
    color: '#ffffff',
    textSize:40,
  },
});

function createData(name, calories, ) {
  return { name, calories,  };
}


const trnsfrom=(hours,minutes,seconds)=>{
  let str='';
  (hours<10)?str+='0':str+='';
  str+=String(hours);
  str+=':';
  (minutes<10)?str+='0':str+='';
  str+=String(minutes);
  str+=':';
  (seconds<10)?seconds+='0':seconds+='';
  str+=String(seconds);
  return str;

}
let dateBeforSub=new Date(zmanim.BasicZmanim.SeaLevelSunset);
let sub=(dateBeforSub.getTime()-(15*60*1000));
let timeAfterMinusDay=new Date(sub);
const rows = [

    createData("06:45:00", 'תפילת שחרית' ),
    createData(trnsfrom(timeAfterMinusDay.getHours(),timeAfterMinusDay.getMinutes(),0), 'תפילת מנחה', ),
    createData("  לאחר תפילת מנחה", " תפילת ערבית " ),

];

let rowsShbat=[];
let dateOfShbat ="";
fetch("https://www.hebcal.com/shabbat?cfg=json&m=44&latitude=31.6333308&longitude=35.2166658&tzid=Etc/GMT"+str)
  .then(response => response.json())
  .then((res )=> {


    res.items.map((item,index)=>{
      let date=new Date(item.date);
      let timeBeforSub =new Date(item.date)
      let subForMinusDay=(timeBeforSub.getTime()-(60*60*1000*24));
      let timeAfterMinusDay=new Date(subForMinusDay);
      if(item.hebrew.slice(0,4) === 'פרשת'){
        dateOfShbat = timeAfterMinusDay.getDate()+"/"+(timeAfterMinusDay.getMonth()+1)+"/"+timeAfterMinusDay.getFullYear();
        rowsShbat[0]=( createData( String(item.hebrew)  ,"פרשת השבוע") )

    }
      if(item.hebrew === 'הדלקת נרות'){
         let timeBeforSub =new Date(item.date)
        //  let sub=(timeBeforSub.getTime()+(5*60*1000));
        //  let timeAfterSub=new Date(sub);
        rowsShbat[1]=(createData(trnsfrom(timeBeforSub.getHours(),timeBeforSub.getMinutes(),timeBeforSub.getSeconds()), '  תפילת מנחה ערב שבת', )) 
        rowsShbat[2]=(  createData("07:45:00", '   תפילת שחרית של שבת' ) )

       // rowsShbat[2]=(  createData("07:45:00", 'תפילת מחה של שבת' ) )
     
      }
      if(item.hebrew === 'הבדלה'){
       
        let timeBeforSub =new Date(item.date)
        let subForMinusDay=(timeBeforSub.getTime()-(10*60*1000));
        let timeAfterMinusDay=new Date(subForMinusDay);
        rowsShbat.push(  createData(String("מופיע בלוח המודעות"), 'תפילת מנחה של שבת' ), )
       rowsShbat.push(  createData(trnsfrom(timeAfterMinusDay.getHours(),timeAfterMinusDay.getMinutes(),timeAfterMinusDay.getSeconds()), ' תפילת ערבית של מוצ"ש' ), )
     }
   
        
        // rowsShbat.push( createData( trnsfrom ( date.getHours(),date.getMinutes(),date.getSeconds() ) , String(item.hebrew) ))
    })
    
//  let timeBeforSub =new Date(res.items[2].date)
//  let sub=(timeBeforSub.getTime()-(5*60*1000));
//  let timeAfterSub=new Date(sub);
//  dateOfShbat = timeBeforSub.getDate()+"/"+(timeBeforSub.getMonth()+1)+"/"+timeBeforSub.getFullYear();
//  rowsShbat.push( createData( String(res.items[3].hebrew) , 'פרשת השבוע') )
//  rowsShbat.push( createData( trnsfrom ( timeAfterSub.getHours(),timeAfterSub.getMinutes(),timeAfterSub.getSeconds() ) ,"הדלקת נרות") )
// let y = new Date(res.items[2].date)
// rowsShbat.push( createData( trnsfrom ( y.getHours(),y.getMinutes(),y.getSeconds() ) ,"צאת השבת (50 דקות אחרי השקיעה) ") )
   

  
  
  });

export default function PrayerLoveIsreal() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <Paper className={classes.paperTyp}>
<Typography style={{ }} >
  <br></br>
    זמני התפילות בבית כנסת ביום חול

</Typography>
 
    </Paper>
   
    <Paper className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow 
            key={row.name} 
           
            >

              <TableCell 
            
              component="th" 
              scope="row" 
              style={{textAlign:'right',backgroundColor:(index%2===0)?'#ffff':'#1212',color:'#4d4dff'}}>
                {row.name}
              </TableCell>

              <TableCell 
              
              style={{textAlign:'right',backgroundColor:(index%2===0)?'#ffff':'#1212',color:'#4d4dff'}}>
              {row.calories}
              </TableCell>
   
            
            </TableRow>
          ))}
        </TableBody>
      </Table>

      </Paper>

      <Paper className={classes.paperTypTow}>
<Typography style={{ }} >
  <br></br>
   זמני התפילות לשבת הקרובה
  {" "}
  {//dateOfShbat!==""?dateOfShbat:""}
}
</Typography>
 
    </Paper>
      <Paper className={classes.paper}>
      <Table className={classes.tableTow} aria-label="simple table">
        <TableHead>
          <TableRow>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsShbat.map((row,index) => (
            <TableRow 
            key={row.name} 
           
            >

              <TableCell 
            
              component="th" 
              scope="row" 
              style={{textAlign:'right',backgroundColor:(index%2===0)?'#ffff':'#1212',color:'#4d4dff'}}>
                {row.name}
              </TableCell>

              <TableCell 
              
              style={{textAlign:'right',backgroundColor:(index%2===0)?'#ffff':'#1212',color:'#4d4dff'}}>
              {row.calories}
              </TableCell>
   
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </ThemeProvider>
  );
}