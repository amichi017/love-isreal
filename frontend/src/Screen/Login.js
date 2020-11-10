
import React,{Component} from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles,FormControlLabel,Typography,TextField,
    CssBaseline ,Button, Avatar,Checkbox,  } from '@material-ui/core';
    import bg from '../images/bg.jpg';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import video_3 from '../video/video_3.mp4';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { Widget,addResponseMessage ,toggleWidget } from 'react-chat-widget';
import { ReactComponent as Sedor } from '../svg/sedor.svg';
import 'react-chat-widget/lib/styles.css';




const styles = theme => ({
  root: {
    height: '100vh',
    direction:"rtl"

  },
  image: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(13, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction:"rtl"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    //  direction:"rtl"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  msg:{
    width: '100%',
   // position: 'absolute',
    '& > * + *': {
      marginTop: theme.spacing(2),
      
    },
},
button: {
  margin: theme.spacing(1),
  width:(window.innerWidth<650)?window.innerWidth*0.8:window.innerWidth*0.5
},


});


class Login extends Component {
    
    constructor(props) {
        super(props);
       // this.handleClose = this.handleClose.bind(this);
        this.signIn = this.signIn.bind(this);
        this.sendPrayers = this.sendPrayers.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.state={
        full_name:'',
        password:'',
        err:{message:"לא ניתן להיכנס למערכת עקב תקלה בשרת או שגיאה בהזנת הנתונים",flag:false},
        selectedIndex:0,
        morningPrayerOfSand:" ",//שחרית חול 
        afternoonPrayerOfSand:" " ,//מנחה חול
        nightgPrayerOfSandA:" ",// ערבית חול מנין ראשון
        nightgPrayerOfSandB:" ",//ערבית חול מניין שני
        Parasha:" ",//פרשת השבוע
        afternoonPrayerOfFridayNight:" ",//תפילת מנחה ערב שבת
        morningPrayerOfSabbath:" ",//תפילת שחרית של שבת
        Psalms:" ",//תהילים
        afternoonPrayerOfSabbath:" ",//תפילת מנחה של שבת
        rabbiYosefChaim:" ",//שיעור בן איש חי 
        thirdMeal:" ",//סעודה שלישית 
        nightgPrayerOfShabbatCameOut:" ",//ערבית של מוצאי שבת
        Extensions:[], 
        // dataOfPrayers:["תפילת שחרית","תפילת מנחה","תפילת ערבית (קיץ)" , "תפילת ערבית חורף"],
        // dataOfShbat:[],


    }; 
}
handleNewUserMessage = (newMessage) => {
  let data={
    "user":"דוד בוכריס",
    "message":newMessage
  }
  axios.post("https://nokdim-backend.herokuapp.com/message/",data)
  .then((response) => response.data)
      .then((res) =>{
        console.log(res,"res")
      })

  console.log(`New message incomig! ${newMessage}`);
  // Now send the message throught the backend API
}
    componentWillMount(){

      toggleWidget();
      axios.get("https://nokdim-backend.herokuapp.com/prayers")
      .then((response) => response.data)
      .then((res) =>{
        this.setState({
          morningPrayerOfSand:res.prayers[0].morningPrayerOfSand,//שחרית חול 
          afternoonPrayerOfSand:res.prayers[0].afternoonPrayerOfSand ,//מנחה חול
          nightgPrayerOfSandA:res.prayers[0].nightgPrayerOfSandA,// ערבית חול מנין ראשון
          nightgPrayerOfSandB:res.prayers[0].nightgPrayerOfSandB,//ערבית חול מניין שני
          Parasha:res.prayers[0].Parasha,//פרשת השבוע
          afternoonPrayerOfFridayNight:res.prayers[0].afternoonPrayerOfFridayNight,//תפילת מנחה ערב שבת
          morningPrayerOfSabbath:res.prayers[0].morningPrayerOfSabbath,//תפילת שחרית של שבת
          Psalms:res.prayers[0].Psalms,//תהילים
          afternoonPrayerOfSabbath:res.prayers[0].afternoonPrayerOfSabbath,//תפילת מנחה של שבת
          rabbiYosefChaim:res.prayers[0].rabbiYosefChaim,//שיעור בן איש חי 
          thirdMeal:res.prayers[0].thirdMeal,//סעודה שלישית 
          nightgPrayerOfShabbatCameOut:res.prayers[0].nightgPrayerOfShabbatCameOut,//ערבית של מוצאי שבת
          Extensions:res.prayers[0].Extensions, 
        })
        
        this.forceUpdate();
       
      })
      
    }

    sendPrayers(){

      let data={
          morningPrayerOfSand:this.state.morningPrayerOfSand,//שחרית חול 
          afternoonPrayerOfSand:this.state.afternoonPrayerOfSand, //מנחה חול
          nightgPrayerOfSandA:this.state.nightgPrayerOfSandA,// ערבית חול מנין ראשון
          nightgPrayerOfSandB:this.state.nightgPrayerOfSandB,//ערבית חול מניין שני
          afternoonPrayerOfFridayNight:this.state.afternoonPrayerOfFridayNight,//תפילת מנחה ערב שבת
          morningPrayerOfSabbath:this.state.morningPrayerOfSabbath,//תפילת שחרית של שבת
          Psalms:this.state.Psalms,//תהילים
          afternoonPrayerOfSabbath:this.state.afternoonPrayerOfSabbath,//תפילת מנחה של שבת
          rabbiYosefChaim:this.state.rabbiYosefChaim,//שיעור בן איש חי 
          thirdMeal:this.state.thirdMeal,//סעודה שלישית 
          nightgPrayerOfShabbatCameOut:this.state.nightgPrayerOfShabbatCameOut,//ערבית של מוצאי שבת
          Extensions:this.state.Extensions, 
      }
     
      axios.patch("https://nokdim-backend.herokuapp.com/prayers/5fa3beb84ca87b49c02787e2",data)
      .then((response) => response.data)
      .then((res) => {
          // if(res.message === 'Auth successful'){
          //     this.setState({selectedIndex:1})
          // }
          console.log(res,"res");

          }).catch(err => {

              console.log(err,"err axios.patch(https://nokdim-backend.herokuapp.com/prayers")
          })

    }
handleExpandClick(){
  this.setState((prevState) => (this.state.err.flag=!prevState.err.flag));
}
    handleInputChange(e) {
    this.setState({ [e.target.name] : e.target.value});
    
  }
  signIn(){
   
    console.log(this.state,"e.target.value")
    this.setState({full_name:"",password:""})
    const { full_name,password } = this.state;
    let data={
        user:this.state.full_name,
        password:this.state.password,
    }
    let heders={ 
      "Access-Control-Allow-Origin":"*",
       'Content-Type': 'application/json',
       "Accept":"*/*",
      "Accept-Encoding":"gzip, deflate, br"

}

axios.post("https://nokdim-backend.herokuapp.com/user/login",data)
 .then((response) => response.data)
 .then((res) => {
    if(res.message === 'Auth successful'){
        this.setState({selectedIndex:2})
    }
    console.log(res,"res");

    }).catch(err => {
      this.state.err.flag=true;
      this.forceUpdate()
      setTimeout(()=>{this.state.err.flag=false;this.forceUpdate()} , 5000);
       console.log(this.state,"this.state")

        console.log(err,"err nokdim-backend.herokuapp.com/user/login")
    })
    
    

    // this.state.Team= axios.get('/get_users',tokenConfig(store.getState))
    // .then((res) => { 
     
    // this.state.Team=res.data;
     
    // })
    // .catch(err => {
    //     console.log(err);

    //    });
    // const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    // const emailRegex = new RegExp("[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,6}");    
    // let flag=true;
    
    // if(((strongRegex.test(newPassword)===false) || ( newPassword.length>30))&& newPassword!=="" ){flag=false;this.setState({err_new_Password:true});setTimeout(()=>{this.setState({err_new_Password:false});}, 10000);}
    // if(first_name.length>30 ){flag=false;this.setState({err_first_name:true});setTimeout(()=>{this.setState({err_first_name:false});}, 8000);}
  }
    render() {
   
    

      if(this.state.selectedIndex === 0){

        return (
          <div>
      
          <Grid container component="main" className={this.props.classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={this.props.classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={this.props.classes.paper}>
                <Avatar className={this.props.classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>

                {/* <div className={this.props.classes.msg}>
              <Snackbar open={this.state.err.flag} autoHideDuration={7000} onClose={this.handleClose}>
                  <Alert onClose={this.handleClose} severity="error">
                    לא ניתן להיכנס למערכת עקב   <strong>שגיאה בשרת או בנתונים שהוזנו   </strong> 
                  </Alert>
                  </Snackbar>
        </div> */}

                <Typography component="h1" variant="h5">
                  Log in
                </Typography>
                <div className={this.props.classes.form} >
                <div dir="rtl">
                  <TextField
                  error={this.state.err.flag}
                  helperText={this.state.err.flag===true?"שם המשתמש או הסיסמא שגואים":""}
                    // onChange={{()=>{thfullName}}}
                    value={this.state.full_name}
                    onChange={this.handleInputChange}
                    direction="rtl"
                    dir="rtl"
                    margin="normal"
                    required
                    fullWidth
                    id="full_name"
                    label="שם מלא"
                    name="full_name"
                    autoComplete="full_name"
                    autoFocus
                  />
                  </div>
                  <TextField
                    error={this.state.err.flag}
                    helperText={this.state.err.flag===true?"שם המשתמש או הסיסמא שגואים":""}
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  //   variant="outlined"
                  style={{textAlign:'right',direction:"rtl"}}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="סיסמא"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  
                  {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
              
                  <Button
                    onClick={this.signIn}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={this.props.classes.submit}
                  >
                    Sign In
                  </Button>
               
                  <Grid container>
                    <Grid item xs>
               
                      {/* <Link href="#" variant="body2">
                        Forgot password?
                      </Link> */}
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {/* {"Don't have an account? Sign Up"} */}
                      </Link>
                    </Grid>
                  </Grid>
                  
                  <Box mt={5}>
                  
              
          
                  </Box>
                </div>
              </div>
            </Grid>
          </Grid>
         
         

          </div>
        );
        
      }

      if(this.state.selectedIndex === 1){

        return (
          <div style={{
            position:'absolute',
            top:0,
            minWidth:window.innerWidth,
            width:'auto',
          zIndex:-1,
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          maxHeight: window.innerHeight*0.6,}}>

         
            <div style={{
              display:'flex',
              justifyContent:"center",
              flexDirection:'column',
              alignItems:"center",
              marginTop:window.innerWidth<650?window.innerHeight*0.15:window.innerHeight*0.15,
              
              
              }}>
          <Paper style={{width:(window.innerWidth<650)?window.innerWidth*0.9:window.innerWidth*0.6, display:'flex',justifyContent:"center",flexDirection:'column',alignItems:"center"}}>

            <Typography gutterBottom color="textSecondary"  variant={(window.innerWidth<650)?"h3":"h2"} style={{  margin: 20,dir:"rtl"}}>
              זמני התפילות של יום חול

            </Typography>
            <div style={{width:(window.innerWidth<650)?window.innerWidth*0.8:window.innerWidth*0.5, display:'flex',justifyContent:"center",flexDirection:'column',alignItems:"center"}}>
            
            
            <TextField
           id="standard-full-width"
           variant="outlined"
           style={{ margin: 20,direction:"rtl" }}
           placeholder={this.state.morningPrayerOfSand!==" "?this.state.morningPrayerOfSand: "תפילת שחרית"}
           fullWidth
          value={this.state.morningPrayerOfSand}
           onChange={this.handleInputChange}
           direction="rtl"
           dir="rtl"
           margin="normal"
           required
           fullWidth
          // id="full_name"
           label=" תפילת שחרית"
          name="morningPrayerOfSand"
          // autoComplete="full_name"
           autoFocus
           InputLabelProps={{
             shrink: true,
           }}
           
           
          />

          <TextField
            id="standard-full-width"
            variant="outlined"
            style={{ margin: 20,direction:"rtl" }}
            placeholder={this.state.afternoonPrayerOfSand!==" "?this.state.afternoonPrayerOfSand: "תפילת מנחה"}
            fullWidth
            value={this.state.afternoonPrayerOfSand}
            onChange={this.handleInputChange}
            direction="rtl"
            dir="rtl"
            margin="normal"
            required
            fullWidth
           //id="full_name"
            label="תפילת מנחה"
           name="afternoonPrayerOfSand"
           // autoComplete="full_name"
            autoFocus
            InputLabelProps={{
              shrink: true,
            }}
          />
              <TextField
              id="standard-full-width"
              variant="outlined"
              style={{ margin: 20,direction:"rtl" }}
              placeholder={this.state.nightgPrayerOfSandA!==" "?this.state.nightgPrayerOfSandA: "תפילת ערבית (קיץ)"}
              fullWidth
              value={this.state.nightgPrayerOfSandA}
              onChange={this.handleInputChange}
              direction="rtl"
              dir="rtl"
              margin="normal"
              required
              fullWidth
             // id="full_name"
              label="תפילת ערבית (קיץ)"
             name="nightgPrayerOfSandA"
             // autoComplete="full_name"
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
           
          
          />
              <TextField
                  id="standard-full-width"
                  variant="outlined"
                  style={{ margin: 20,direction:"rtl" }}
                  placeholder={this.state.nightgPrayerOfSandB!==" "?this.state.nightgPrayerOfSandB: "תפילת ערבית (חורף)"}
                  fullWidth
                  value={this.state.nightgPrayerOfSandB}
                  onChange={this.handleInputChange}
                  direction="rtl"
                  dir="rtl"
                  margin="normal"
                  required
                  fullWidth
                 // id="full_name"
                  label="תפילת ערבית (חורף)"
                 name="nightgPrayerOfSandB"
                 // autoComplete="full_name"
                  autoFocus
                  InputLabelProps={{
                    shrink: true,
                  }}
          
       
          />
              </div>
            </Paper>
          

            </div>













            <div style={{
              display:'flex',
              justifyContent:"center",
              flexDirection:'column',
              alignItems:"center",
              marginTop:window.innerWidth<650?window.innerHeight*0.15:window.innerHeight*0.1,
              
              
              }}>
          <Paper style={{width:(window.innerWidth<650)?window.innerWidth*0.9:window.innerWidth*0.6, display:'flex',justifyContent:"center",flexDirection:'column',alignItems:"center",paddingBottom:window.innerWidth<650?window.innerHeight*0.15:window.innerHeight*0.1}}>

            <Typography gutterBottom color="textSecondary"  variant={(window.innerWidth<650)?"h3":"h2"} style={{  margin: 20,dir:"rtl"}}>
              זמני התפילות של יום שבת
            </Typography>

            
            <div style={{width:(window.innerWidth<650)?window.innerWidth*0.8:window.innerWidth*0.5, display:'flex',justifyContent:"center",flexDirection:'column',alignItems:"center"}}>
            

           
            <TextField
               id="standard-full-width"
               variant="outlined"
               style={{ margin: 20,direction:"rtl" }}
               placeholder={this.state.afternoonPrayerOfFridayNight!==" "?this.state.afternoonPrayerOfFridayNight: " תפילת מנחה של ערב שבת"}
               fullWidth
               value={this.state.afternoonPrayerOfFridayNight}
               onChange={this.handleInputChange}
               direction="rtl"
               dir="rtl"
               margin="normal"
               required
               fullWidth
              // id="full_name"
               label=" תפילת מנחה של ערב שבת"
              name="afternoonPrayerOfFridayNight"
              // autoComplete="full_name"
               autoFocus
               InputLabelProps={{
                 shrink: true,
               }}
          
          
          />
            
            
            
            <TextField
             id="standard-full-width"
             variant="outlined"
             style={{ margin: 20,direction:"rtl" }}
             placeholder={this.state.morningPrayerOfSabbath!==" "?this.state.morningPrayerOfSabbath: " תפילת מנחה של ערב שבת"}
             fullWidth
             value={this.state.morningPrayerOfSabbath}
             onChange={this.handleInputChange}
             direction="rtl"
             dir="rtl"
             margin="normal"
             required
             fullWidth
            // id="full_name"
             label=" תפילת שחרית של שבת"
            name="morningPrayerOfSabbath"
            // autoComplete="full_name"
             autoFocus
             InputLabelProps={{
               shrink: true,
             }}
           
          
          />

         <TextField
         
    
            id="standard-full-width"
            variant="outlined"
            style={{ margin: 20,direction:"rtl" }}
            placeholder={this.state.Psalms!==" "?this.state.Psalms: "תהילים"}
            fullWidth
            value={this.state.Psalms}
            onChange={this.handleInputChange}
            direction="rtl"
            dir="rtl"
            margin="normal"
            required
            fullWidth
           // id="full_name"
            label="תהילים"
            name="Psalms"
           // autoComplete="full_name"
            autoFocus
            InputLabelProps={{
              shrink: true,
            }}
          
          />




              <TextField
             id="standard-full-width"
             variant="outlined"
             style={{ margin: 20,direction:"rtl" }}
             placeholder={this.state.rabbiYosefChaim!==" "?this.state.rabbiYosefChaim: "שיעור בן איש חי"}
             fullWidth
             value={this.state.rabbiYosefChaim}
             onChange={this.handleInputChange}
             direction="rtl"
             dir="rtl"
             margin="normal"
             required
             fullWidth
            // id="full_name"
             label="שיעור בן איש חי"
             name="rabbiYosefChaim"
            // autoComplete="full_name"
             autoFocus
             InputLabelProps={{
               shrink: true,
             }}
           
           
          />

          <TextField
            id="standard-full-width"
            variant="outlined"
            style={{ margin: 20,direction:"rtl" }}
            placeholder={this.state.afternoonPrayerOfSabbath!==" "?this.state.afternoonPrayerOfSabbath: "תפילת מנחה של שבת"}
            fullWidth
           value={this.state.afternoonPrayerOfSabbath}
            onChange={this.handleInputChange}
            direction="rtl"
            dir="rtl"
            margin="normal"
            required
            fullWidth
           // id="full_name"
            label="תפילת מנחה של שבת"
            name="afternoonPrayerOfSabbath"
           // autoComplete="full_name"
            autoFocus
            InputLabelProps={{
              shrink: true,
            }}
           
          
          />





                <TextField
                 id="standard-full-width"
                 variant="outlined"
                 style={{ margin: 20,direction:"rtl" }}
                 placeholder={this.state.thirdMeal!==" "?this.state.thirdMeal:"סעודה שלישית"}
                 fullWidth
                value={this.state.thirdMeal}
                 onChange={this.handleInputChange}
                 direction="rtl"
                 dir="rtl"
                 margin="normal"
                 required
                 fullWidth
                // id="full_name"
                 label="סעודה שלישית"
                 name="thirdMeal"
                // autoComplete="full_name"
                 autoFocus
                 InputLabelProps={{
                   shrink: true,
                 }}
            
           
          />

          <TextField
          id="standard-full-width"
          variant="outlined"
          style={{ margin: 20,direction:"rtl" }}
          placeholder={this.state.nightgPrayerOfShabbatCameOut!==" "?this.state.nightgPrayerOfShabbatCameOut:"ערבית של מוצאי שבת"}
          fullWidth
         value={this.state.nightgPrayerOfShabbatCameOut}
          onChange={this.handleInputChange}
          direction="rtl"
          dir="rtl"
          margin="normal"
          required
          fullWidth
         // id="full_name"
          label="ערבית של מוצאי שבת"
          name="nightgPrayerOfShabbatCameOut"
         // autoComplete="full_name"
          autoFocus
          InputLabelProps={{
            shrink: true,
          }}
           
          
          />
          
              </div>


              <Button
        variant="contained"
        color="primary"
        onClick={this.sendPrayers}
        className={this.props.classes.button}
        startIcon={<SendOutlinedIcon/>}
      >
        Send
      </Button>
            </Paper>
          

            </div>









        </div>

        );}

        
        
        if(this.state.selectedIndex === 2){
       
            return(
          <div>
                { <video
               // ref={this.myRef}
                autoPlay
                muted
                style={{position:"absolute",top:0,height:window.innerHeight,width:window.innerWidth, zIndex:-5,objectFit:"cover"}}
                >
                    <source src={video_3} type="video/mp4"></source>
                </video> }

               
{/* <div style={{
   // marginTop:58, 
     Width:window.innerWidth,
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
 </div>  */}

          <Widget
          //fullScreenMode
         
          senderPlaceHolder="הקלד/י הודעה"
          showTimeStamp
          //launcher={()=>{return true}}
          autofocus
          launcherOpenLabel
          sendButtonAlt
          handleNewUserMessage={this.handleNewUserMessage}
        // profileAvatar={logo}
          title="הודעות לבית הכנסת"
          subtitle="מתעדכן על ידי הגבאי"
         />
                
               

            

                </div>

            );

        }










        else{
          return (
            <div>
 
            </div>
  
          );}


        





      
    }
}


export default withStyles(styles)(Login);
