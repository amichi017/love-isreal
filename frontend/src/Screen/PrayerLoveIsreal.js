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
    maxWidth: (window.innerWidth<650)?320:450,
    marginTop:30,
    paddingTop:30,
   
  },
  tableTow:{
    align:'right',
    maxWidth: (window.innerWidth<650)?320:450,
    marginTop:30,
    margingBottom:window.innerWidth<650?window.innerHeight*0.2:window.innerHeight*0.1
    // paddingTop:30,
   
  },
  paperTow:{
    maxWidth: (window.innerWidth<650)?320:450,
    marginTop:20,
    margin:'auto',
    display:'flex',
    flexDirection:'column',
    flexWrap:"wrap",
    marginBottom:window.innerWidth<650?window.innerHeight*0.05:window.innerHeight*0.06,
    
  },
  paper:{
    maxWidth:(window.innerWidth<650)?320:450,
    marginTop:20,
    margin:'auto',
    display:'flex',
    flexDirection:'column',
    flexWrap:"wrap",
    marginBottom:30,
    
  },
  paperTyp:{
    maxWidth: (window.innerWidth<650)?320:450,
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
    maxWidth: (window.innerWidth<650)?320:450,
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
let sub=(dateBeforSub.getTime()-(10*60*1000));
let timeAfterMinusDay=new Date(sub);
let str1=String("לאחר תפילת מנחה");
let str2=String("(קיץ) תפילת ערבית ");
let str3=String("20:00:00");
let str4=String("(חורף) תפילת ערבית ");
const rows = [

    createData("06:45:00", 'תפילת שחרית' ),
    createData(trnsfrom(timeAfterMinusDay.getHours(),timeAfterMinusDay.getMinutes(),0), 'תפילת מנחה', ),
    createData(str1, str2),
    createData(str3,str4),

];

let rowsShbat=[];
let dateOfShbat ="";
let counter=0;
fetch("https://www.hebcal.com/shabbat?cfg=json&m=50&latitude=31.6333308&longitude=35.2166658&tzid=Etc/GMT"+str)
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
   
        let sub=(timeBeforSub.getTime()-(10*60*1000));
        let timeAfterSub=new Date(sub);
        rowsShbat[1]=( createData( trnsfrom ( timeAfterSub.getHours(),timeAfterSub.getMinutes(),timeAfterSub.getSeconds() ) ,"זמן הדלקת נרות") )
        rowsShbat[2]=(createData(trnsfrom(timeBeforSub.getHours(),timeBeforSub.getMinutes(),timeBeforSub.getSeconds()), '  תפילת מנחה ערב שבת', )) 
        rowsShbat[3]=(  createData("07:45:00", '   תפילת שחרית של שבת' ) )
        rowsShbat[4]=(  createData("13:00:00", 'תהילים' ) )

       // rowsShbat[2]=(  createData("07:45:00", 'תפילת מחה של שבת' ) )
     
      }
      //if(item.hebrew === 'הבדלה (50 דקות)'){
        if(counter === 3){
        
        console.log(rowsShbat,"rowsShbat")
        let timeBeforSub =new Date(item.date)
        let subForMinusDay=(timeBeforSub.getTime()-(21*60*1000));
        let timeAfterMinusDay=new Date(subForMinusDay);
        
        let timeBeforRabbyYosef =new Date(timeAfterMinusDay)
        let subForRabbyYosef =(timeBeforRabbyYosef.getTime()-(120*60*1000));
        if((timeBeforRabbyYosef.getMinutes()%10)==0 ||(timeBeforRabbyYosef.getMinutes()%10)==5 ){
          subForRabbyYosef =(timeBeforRabbyYosef.getTime()-(120*60*1000));
        }
        else{
          let x=(timeBeforRabbyYosef.getMinutes()%10);
          subForRabbyYosef =(timeBeforRabbyYosef.getTime()-((120+x)*60*1000));
        }
      
        let timeAfterRabbyYosef=new Date(subForRabbyYosef);
        rowsShbat[5]=(  createData(trnsfrom(timeAfterRabbyYosef.getHours(),timeAfterRabbyYosef.getMinutes(),timeAfterRabbyYosef.getSeconds()), 'שיעור בן איש חי' ) )


        let timeBeforMnha =new Date(subForRabbyYosef)
        let subForMnha =(timeBeforMnha.getTime()+(45*60*1000));
        let timeAfterMnha=new Date(subForMnha);
        rowsShbat[6]=(  createData(trnsfrom(timeAfterMnha.getHours(),timeAfterMnha.getMinutes(),timeAfterMnha.getSeconds()),  'מנחה, סעודה שלישית   ' ) )
   
      //   let sub=0;
       
      //  // console.log(timeAfterMinusDay,"timeAfterMinusDay")
      //   if((timeAfterMinusDay.getMinutes()%10)==0 ||(timeAfterMinusDay.getMinutes()%10)==5 ){
          
      //   }
      //   else{

      //       let x=(timeAfterMinusDay.getMinutes()%10);
      //       if(x>5 && x<=7){
      //         console.log(x,"x")
      //         sub =(timeAfterMinusDay.getTime()-((x-5)*60*1000));
      //       }
      //       else if(x>7){
      //         console.log(x,"x")
      //         sub =(timeAfterMinusDay.getTime()+((10-x)*60*1000));
      //       }
      //       else if(x>0 && x<3){
      //         sub =(timeAfterMinusDay.getTime()-((x)*60*1000));
      //       }
      //       else{
      //         console.log(x,"x")
      //         sub =(timeAfterMinusDay.getTime()+((5-x)*60*1000));
      //     }
         
      //   }
      //   timeAfterMinusDay=new Date(sub);
        rowsShbat[7]=createData(trnsfrom(timeAfterMinusDay.getHours(),timeAfterMinusDay.getMinutes(),timeAfterMinusDay.getSeconds()), ' תפילת ערבית של מוצ"ש' )
      //  rowsShbat[8]=( createData( trnsfrom ( date.getHours(),date.getMinutes(),date.getSeconds() ) ,"צאת השבת") )

     }
     counter++;
        
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
   

//rowsShbat[9]=(createData(trnsfrom(new Date(zmanim.BasicZmanim.Tzais72).getHours(),new Date(zmanim.BasicZmanim.Tzais72).getMinutes(),new Date(zmanim.BasicZmanim.Tzais72).getSeconds()), 'צאת השבת לרבנו תם	', ))
  
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
      <Paper className={classes.paperTow}>
      <Table className={classes.tableTow} aria-label="simple table">
        <TableHead>
          <TableRow>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsShbat.map((row,index) => (
            <TableRow 
            key={row.name} 
            style={{}}
              //marginButtom:(index===(rowsShbat.length-1))? window.innerHeight*0.1:0}}
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