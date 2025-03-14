const express =require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv =require('dotenv')
const colors = require('colors')
const path =require('path')
const { connect } = require('mongoose')
const connectDb = require('./config/connectDB')

//config dot env file
dotenv.config();

//database call
connectDb();

//rest object
const app =express()

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use("/api/v1/users", require("./routes/userRoute"));


//transection routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

//static files
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*', function (req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
} )
//port
const PORT = 8080 || process.env.PORT;

//listen
app.listen(PORT,()=>{
    console.log(`server ruunning on port ${PORT}`);
});