
import React, { Component } from 'react'
import { forwardRef } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { withStyles,Card,Typography,Accordion,
    AccordionSummary ,AccordionDetails  } from '@material-ui/core';
import slide_2 from './images/slide_2.jpg';
import slide_3 from './images/slide_3.jpg';
import slide_4 from './images/slide_4.jpg';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
  const images = [
    slide_2,
    slide_3,
    slide_4,
    slide_2,
    slide_2
  ];

    const styles = theme => ({
        paper: {
           // direction: 'rtl',
           autoFocus:true,
           hight:window.innerhight,
            paddingTop:theme.spacing(15),
            marginLeft:(window.innerWidth<600)?window.innerWidth*0.02:window.innerWidth*0.35,
             marginRight:(window.innerWidth<600)?window.innerWidth*0.02:window.innerWidth*0.1,
             Width:(window.innerWidth<600)?window.innerWidth*0.9:450,
            align:"right",
            margin:'auto',
            display:'flex',
            flexDirection:'column',
            flexWrap:"wrap",
            paddingBottom:400,
            maxWidth:(window.innerWidth<600)?window.innerWidth:450,
         
          //   '& > * + *': {
          //     marginLeft: theme.spacing(2),
          //   },
          },
          div:{
             
            Width:window.innerWidth,
            //hight:window.innerhight,
        //     backgroundImage: `url(  ${ images[0] }  )` ,
            marginTop:theme.spacing(),
           width:'auto',
          zIndex:-1,
        //   //backgroundPosition: 'center',
        //    backgroundSize:"100% 95%",
        //   backgroundRepeat: 'no-repeat',
        maxHight:window.innerhight,
        background: `linear-gradient(#0f0c29, #24243e)`
            
          }
    })

   
  
class Rols extends Component {

    render() {
        return (
        <div className={this.props.classes.div}>
            <div className={this.props.classes.paper}> 
             <MaterialTable
            
            title="  "
            icons={tableIcons}
            columns={[
                {
                    title: 'תפקיד', field: 'name',
                    cellStyle: {
                    //   backgroundColor: '#039be5',
                    //   color: '#FFF',
               
                     align:"right",
                     marginLeft:15,
                   
                    },
                    headerStyle: {
                    //   backgroundColor: '#039be5',
                    marginLeft:15,
                    }
                  },
                  {
                    title: 'שם', field: 'surname',
                    cellStyle: {
                    //   backgroundColor: '#039be5',
                    //   color: '#FFF',
                    direction: 'rtl',
                    align:"right"
                    },
                    headerStyle: {
                    //   backgroundColor: '#039be5',
                    }
                  },
           
            ]}
            data={[
              { name: 'גבאי בית הכנסת', surname: 'דוד בוכריס' },
              { name: 'קורא בתורה', surname: 'אליהו נורי' },
              { name: 'חזן', surname: 'יוסי' }, 
            ]}        
            options={{
              exportButton: true,
            //   exportCsv: (columns, data) => {
            //     alert('You should develop a code to export ' + data.length + ' rows');
            //   }
            }}
            detailPanel={[
                {
                  tooltip: 'Show Name',
                  render: rowData => {
                    return (
                      <div
                        style={{  
                          fontSize: 100,
                          textAlign: 'center',
                          color: 'white',
                          backgroundImage: `url(  ${ images[rowData.tableData.id] }  )` ,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat'
                          
                        }}
                      >
                         
                        {rowData.surname}
                      </div>
                    )
                  },
                },
             
              ]}
          />

            </div>
        </div>
        )
        }
    }
    
    export default withStyles(styles)(Rols);