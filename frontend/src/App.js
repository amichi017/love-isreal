
import React, { Component } from 'react'
import Menu from './Screen/Menu'

import Typography from '@material-ui/core/Typography';
const KosherZmanim = require("kosher-zmanim");


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            shabat:false,
            start:"",
            end:"",
            endDate:""
        }
    }
    
    componentWillMount(){
        let date=new Date();
        const options ={
            date: date,
            //timeZoneId: 'Asia/Jerusalem',
           // timeZoneId: 'ETC/GMT'+str,
           locationName: 'IL',
            latitude: 31.6333308,
            longitude: 35.244064,
           // complexZmanim: true,
           // elevation?: number = 0,
            
        
        }
        const zmanim = KosherZmanim.getZmanimJson(options);
        let timeOfOpen =new Date(zmanim.BasicZmanim.Tzais72)
        let sub=(timeOfOpen.getTime()+(10*60*1000));
        this.state.endDate=new Date(sub);

        let str='';
        if(date.toString().includes('חורף')){
            str+='-2'
        }
        else{
            str+='-3'
        }
        fetch("https://www.hebcal.com/shabbat?cfg=json&m=120&latitude=31.6333308&longitude=35.2166658&tzid=Etc/GMT"+str)
        .then(response => response.json())
        .then((res )=> {
           
        res.items.map((item,index)=>{

            if(item.hebrew === 'הדלקת נרות'){
                let timeBeforSub =new Date(item.date)
                let sub=(timeBeforSub.getTime()-(120*60*1000));
                this.state.start=new Date(sub).getTime();
             }
             if(item.hebrew === 'הבדלה'){
                this.state.end=new Date(item.date).getTime()
               

                let startTime=this.state.start
                let endTime=this.state.end
                if ((nowDate > startTime) && (nowDate < endTime) ) {
                    this.state.shabat=true;
                    this.forceUpdate()
                }
            } 
          
           
           // console.log(this.state,"rhe time")
        })
        })
        .catch((err)=>{
            console.log(err)
        })
        let nowDate=new Date().getTime()
      
       
        
    }

    render() {
       
        return (
            this.state.shabat===false?(
                <div>
                <Menu/>
            </div>
            ):
            (
                <div>
                       <Typography variant="h4" align='center' color="primary" paragraph style={{disply:"flex",justifyContent:'center',alignItems:"center",marginTop:window.innerHeight*0.31,maxWidth:600,marginLeft:(window.innerWidth<650)?0:window.innerWidth*0.25}}>
                           האתר של בית הכנסת "אהבת ישראל" סגור בשבת האתר יפתח במוצאי שבת בשעה {`${this.state.endDate.getHours()}:${this.state.endDate.getMinutes()}`}
                           </Typography> 
                </div>
            )
          
            
        )
    }
}
