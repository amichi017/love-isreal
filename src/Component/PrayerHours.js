///https://api.sunrise-sunset.org/json?lat=28.6444800&lng=77.216721&date=today
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ComplexZmanimCalendar, getZmanimJson } from "kosher-zmanim";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
const KosherZmanim = require("kosher-zmanim");

const options ={
    date: new Date(),
    timeZoneId: 'Etc/GMT-3',
   locationName: 'IL',
    latitude: 31.6333308,
    longitude: 35.2166658,
   // elevation?: number = 0,
    

}
const zmanim = KosherZmanim.getZmanimJson(options);
const zmanimCalendar = new KosherZmanim.ZmanimCalendar();
console.log(JSON.stringify(zmanim),"zmanim")
console.log(zmanimCalendar,"zmanimCalendar")

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

const useStyles = makeStyles({
  table: {
    position:'absolute',
    top:100,
    left:50,
    align:'right',
    maxWidth: 340,
    marginTop:30,
    paddingTop:30,
   
  },
  paper:{
    maxWidth: 350,
    marginTop:30,
  }
});

function createData(name, calories, ) {
  return { name, calories,  };
}

const rows = [
  createData('12:54', 'תפילת שחרית', ),
  createData('תפילת מנחה ויום כיפור','תפילת מוסף םלםגכם כםלכםכלכם'),
  createData('Eclair', 262, ),
  createData('Cupcake', 305,),
  createData('Gingerbread', 356, ),
  createData('Frozen yoghurt', 159, ),
  createData('Ice cream sandwich', 237,),
  createData('Eclair', 262, ),
  createData('Cupcake', 305,),
  createData('Gingerbread', 356, ),
  createData('Frozen yoghurt', 159, ),
  createData('Ice cream sandwich', 237,),
  createData('Eclair', 262, ),
  createData('Cupcake', 305,),
  createData('Gingerbread', 356, ),
];

export default function PrayerHours() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    
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
    </ThemeProvider>
  );
}