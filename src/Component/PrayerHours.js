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
let date=new Date(2020,9,16)
let str='';
if(date.toString().includes('(שעון ישראל (חורף))')){
str+='-2'
}
else{
  str+='-3'
}


console.log(str,'str');
const options ={
    date: date,
    timeZoneId: 'Etc/GMT'+str,
   locationName: 'IL',
    latitude: 31.6333308,
    longitude: 35.2166658,
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
const rows = [
  createData(trnsfrom(new Date(zmanim.BasicZmanim.AlosHashachar).getHours(),new Date(zmanim.BasicZmanim.AlosHashachar).getMinutes(),new Date(zmanim.BasicZmanim.AlosHashachar).getSeconds()), 'עלות השחר' ),
  createData(trnsfrom(new Date(zmanim.BasicZmanim.BeginNauticalTwilight).getHours(),new Date(zmanim.BasicZmanim.BeginNauticalTwilight).getMinutes(),new Date(zmanim.BasicZmanim.BeginNauticalTwilight).getSeconds()), 'זמן טלית ותפילין' ),
  createData(trnsfrom(new Date(zmanim.BasicZmanim.Sunrise).getHours(),new Date(zmanim.BasicZmanim.Sunrise).getMinutes(),new Date(zmanim.BasicZmanim.Sunrise).getSeconds()), 'זריחה הנראית' ),
  createData(trnsfrom(new Date(zmanim.BasicZmanim.SeaLevelSunrise).getHours(),new Date(zmanim.BasicZmanim.SeaLevelSunrise).getMinutes(),new Date(zmanim.BasicZmanim.SeaLevelSunrise).getSeconds()), 'זריחה מישורית' ),
  createData(trnsfrom(new Date(zmanim.BasicZmanim.SofZmanShmaMGA).getHours(),new Date(zmanim.BasicZmanim.SofZmanShmaMGA).getMinutes(),new Date(zmanim.BasicZmanim.SofZmanShmaMGA).getSeconds()), 'סוף זמן קריאת שמע מג"א', ),

  createData(trnsfrom(new Date(zmanim.BasicZmanim.SofZmanShmaGRA).getHours(),new Date(zmanim.BasicZmanim.SofZmanShmaGRA).getMinutes(),new Date(zmanim.BasicZmanim.SofZmanShmaGRA).getSeconds()), 'סוף זמן קריאת שמע גר"א', ),

  createData(trnsfrom(new Date(zmanim.BasicZmanim.SofZmanTfilaMGA).getHours(),new Date(zmanim.BasicZmanim.SofZmanTfilaMGA).getMinutes(),new Date(zmanim.BasicZmanim.SofZmanTfilaMGA).getSeconds()), 'סוף זמן תפילה מג"א', ),

  createData(trnsfrom(new Date(zmanim.BasicZmanim.SofZmanTfilaGRA).getHours(),new Date(zmanim.BasicZmanim.SofZmanTfilaGRA).getMinutes(),new Date(zmanim.BasicZmanim.SofZmanTfilaGRA).getSeconds()), 'סוף זמן תפילה גרא', ),

  createData(trnsfrom(new Date(zmanim.BasicZmanim.Chatzos).getHours(),new Date(zmanim.BasicZmanim.Chatzos).getMinutes(),new Date(zmanim.BasicZmanim.Chatzos).getSeconds()), 'חצות היום והלילה', ),


  createData(trnsfrom(new Date(zmanim.BasicZmanim.MinchaGedola).getHours(),new Date(zmanim.BasicZmanim.MinchaGedola).getMinutes(),new Date(zmanim.BasicZmanim.MinchaGedola).getSeconds()), 'תחילת זמן מנחה גדולה', ),

  createData(trnsfrom(new Date(zmanim.BasicZmanim.MinchaKetana).getHours(),new Date(zmanim.BasicZmanim.MinchaKetana).getMinutes(),new Date(zmanim.BasicZmanim.MinchaKetana).getSeconds()), 'מנחה קטנה', ),

  createData(trnsfrom(new Date(zmanim.BasicZmanim.PlagHamincha).getHours(),new Date(zmanim.BasicZmanim.PlagHamincha).getMinutes(),new Date(zmanim.BasicZmanim.PlagHamincha).getSeconds()), 'פלג המנחה', ),
  createData(trnsfrom(new Date(zmanim.BasicZmanim.Sunset).getHours(),new Date(zmanim.BasicZmanim.Sunset).getMinutes(),new Date(zmanim.BasicZmanim.Sunset).getSeconds()), 'שקיעה הנראית', ),
  createData(trnsfrom(new Date(zmanim.BasicZmanim.SeaLevelSunset).getHours(),new Date(zmanim.BasicZmanim.SeaLevelSunset).getMinutes(),new Date(zmanim.BasicZmanim.SeaLevelSunset).getSeconds()), 'שקיעה מישורית', ),

  createData(trnsfrom(new Date(zmanim.BasicZmanim.EndCivilTwilight).getHours(),new Date(zmanim.BasicZmanim.EndCivilTwilight).getMinutes(),new Date(zmanim.BasicZmanim.EndCivilTwilight ).getSeconds()), 'צאת הכוכבים ', ),

  createData(trnsfrom(new Date(zmanim.BasicZmanim.Tzais72).getHours(),new Date(zmanim.BasicZmanim.Tzais72).getMinutes(),new Date(zmanim.BasicZmanim.Tzais72).getSeconds()), 'צאת הכוכבים לרבנו תם	', ),
 


];
let rowsShbat=[];
let dateOfShbat ="";
fetch("https://www.hebcal.com/shabbat?cfg=json&m=50&latitude=31.6333308&longitude=35.2166658&tzid=Etc/GMT"+str)
  .then(response => response.json())
  .then((res )=> {
     console.log(res,"data");
 let timeBeforSub =new Date(res.items[0].date)
 let sub=(timeBeforSub.getTime()-(5*60*1000));
 let timeAfterSub=new Date(sub);
 dateOfShbat = timeBeforSub.getDate()+"/"+(timeBeforSub.getMonth()+1)+"/"+timeBeforSub.getFullYear();
 rowsShbat.push( createData( String(res.items[1].hebrew) , 'פרשת השבוע') )
 rowsShbat.push( createData( trnsfrom ( timeAfterSub.getHours(),timeAfterSub.getMinutes(),timeAfterSub.getSeconds() ) ,"הדלקת נרות") )
let y = new Date(res.items[2].date)
rowsShbat.push( createData( trnsfrom ( y.getHours(),y.getMinutes(),y.getSeconds() ) ,"צאת השבת (50 דקות אחרי השקיעה) ") )
   

  
  
  });
export default function PrayerHours() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <Paper className={classes.paperTyp}>
<Typography style={{ }} >
  <br></br>
    זמני היום בהלכה לתאריך
  {" "}
  {String(new Date().getDate()+"/"+ (new Date().getMonth()+1) +"/"+new Date().getFullYear())}
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
   זמני השבת הקרובה לתאריך
  {" "}
  {dateOfShbat!==""?dateOfShbat:""}
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