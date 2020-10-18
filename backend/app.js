const express = require('express')
const app = express()
const morgan=require('morgan')
const user=require('./routes/user')

const routesUser=require('./routes/user')
const routesMessage=require('./routes/Message')


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header','origin,  x-requested-with, Content-Type, Accept, Authentication ');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods',"PUT, POST, GET, PATCH, DELETE");
        return res.status(200).json({});
    }
    
     next();

})




app.use('/user',routesUser)
app.use('/message',routesMessage)

app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 5000);
    res.json({
        error:{
            message:error.message
        }
    })   
})
module.exports=app;


// app.use((req,res,next)=>{
//     req.on('data',(chank)=>{
//         console.log(chank.toString())
//       })
//       req.on('end',()=>{
//           next();
//       })
// })


// app.get('/', (req, res) => {
// res.status(200).json({
//     message:"helfvdfvdfdlo world"
// })
// });


// app.post('/zmanim',  (req, res)=> {
//   res.status(200).json({
//       message:req.body
//   })
// })