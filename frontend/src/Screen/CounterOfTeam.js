// import React, { Component } from 'react'
// import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
// import { 
//     withStyles,
//     Card,
//     Typography,
//     Paper,
//     CardActionArea,
//     CardActions,
//     CardContent,
//     CardMedia,
//     Button
// } from '@material-ui/core';
// import { forwardRef } from 'react';
// import MaterialTable, { MTableToolbar } from 'material-table';
// import {
//   AddBox,
//   ArrowDownward,
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   Clear,
//   DeleteOutline,
//   Edit,
//   FilterList,
//   FirstPage,
//   LastPage,
//   Remove,
//   SaveAlt,
//   Search,
//   ViewColumn
// } from '@material-ui/icons';

import React, { Component } from 'react'
import anime from 'animejs';
import { ReactComponent as YourSvg } from '../svg/torah.svg';
export default class CounterOfTeam extends Component {
    animation() {
        anime({
            targets: '.myDiv',
            translateX: 250,
            rotate: '1turn',
            backgroundColor: '#F4FF',
            duration: 5000,
          });
        }
    
      componentDidMount() {
        this.animation();
      }
    render() {
        return (
            <div class="myDiv">
       <h1 >vsdgvfdsgvsfg</h1>
        </div>
        )
    }
}



// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
//   };
   
//     const styles = theme => ({
//         paper: {
//           direction:"rtl",
//           marginTop:window.innerHeight*0.15,
//           marginBottom:window.innerHeight*0.1,
//           marginLeft:(window.innerWidth<600)?window.innerWidth*0.02:window.innerWidth*0.35,
//           marginRight:(window.innerWidth<600)?window.innerWidth*0.02:window.innerWidth*0.35,

//          // Width: 'auto',
//           margin:'auto',
        
//          // marginBottom:20,
//           maxWidth:600,
//         },
       
//           table: {
//             autoFocus:true,
//             //hight:window.innerhight,
//             paddingTop:theme.spacing(5),
//             marginLeft:(window.innerWidth<600)?window.innerWidth*0.02:window.innerWidth*0.35,
//             marginRight:(window.innerWidth<600)?window.innerWidth*0.02:window.innerWidth*0.35,
//             Width:(window.innerWidth<600)?window.innerWidth*0.9:450,
//             align:"right",
//             margin:'auto',
//             display:'flex',
//             flexDirection:'column',
//             flexWrap:"wrap",
//             paddingBottom:35,
//             maxWidth:(window.innerWidth<600)?window.innerWidth:450,
//           },
//           div:{
             
//             Width:window.innerWidth,
//             //hight:window.innerhight,
//             // backgroundImage: `url(  ${ images[0] }  )` ,
//             //marginTop:theme.spacing(),
//             width:'auto',
//             zIndex:-1,
//             maxHight:window.innerHeight*0.5,
//             background: `linear-gradient(#0f0c29, #24243e)`
//             //   //backgroundPosition: 'center',
//             //    backgroundSize:"100% 95%",
//             //   backgroundRepeat: 'no-repeat',
            
//           }
//     })
// export class CounterOfTeam extends Component {
//     state = {
// 		date: new Date()
// 	}
//     render() {
//         return (
//   <div style={{  display:'flex',
//   flexDirection:'column',
//   flexWrap:"wrap",
//   justifyContent:"center",
//   }}>
              

           
//       <Card className={this.props.classes.paper}>
//             <CardActionArea>
//             <PeopleRoundedIcon style={{width:200,height:200,paddingRight:window.innerHeight*0.1}} ></PeopleRoundedIcon>

//               <CardContent>
//                 {/* <Typography gutterBottom variant="h5" component="h2">
//                   תאריך
//                 </Typography> */}
//                 <Typography style={{paddingBottom:window.innerHeight*0.06,paddingRight:window.innerWidth*0.02,paddingTop:10,color:"#ff9933",}}  variant="h5">
//                   6 אנשים באים לתפילה
//               </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
     

//       <div className={this.props.classes.div}>
      
//         <div className={this.props.classes.table}>

//           <Typography style={{ direction:"rtl",paddingBottom:window.innerHeight*0.06,paddingRight:window.innerWidth*0.02,paddingTop:10,color:"#ff9933",}}  variant="h5">
//             רשימת האנשים שמגעים לתפילה:
//           </Typography>


//           <MaterialTable
            
//             title="  "
//             icons={tableIcons}
//             columns={[
//                 {
//                     title: 'מאשר הגעה', field: 'name',
//                     cellStyle: x=>({
//                       color:(x==='מגיע')?'#208000':'#ff0000',
//                       direction: 'rtl',
//                       align:"right",
//                       marginLeft:15,
//                     }),
//                     headerStyle: {
//                     //   backgroundColor: '#039be5',
//                     marginLeft:15,
//                     direction: 'rtl'
//                     }
//                   },
//                   {
//                     title: 'שם', field: 'surname',
//                     cellStyle: {
//                     //   backgroundColor: '#039be5',
//                     //   color: '#FFF',
//                     direction: 'rtl',
//                     align:"right"
//                     },
//                     headerStyle: {
//                       direction: 'rtl'
//                     //   backgroundColor: '#039be5',
//                     }
//                   },
           
//             ]}
//             data={[
//               { name: 'מגיע', surname: 'דוד בוכריס' },
//               { name: ' לא מגיע', surname: 'עמרם כהן' },
//               { name: 'מגיע', surname: 'יוסי' }, 
//             ]}        
//             options={{
//               exportButton: true,
//             //   exportCsv: (columns, data) => {
//             //     alert('You should develop a code to export ' + data.length + ' rows');
//             //   }
//             }}
          
//           />
//         </div>
//       </div>       

//  </div>
//         )
//     }
// }

// export default withStyles(styles)(CounterOfTeam);

