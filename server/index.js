const express = require ('express');
const app= express();
var cors = require("cors");
const connectDB = require('./DB/Connection')
const mongoose=require('mongoose');

connectDB();
 //mongoose.connect("mongodb+srv://Akshat:SoftwareXeon123@cluster0.ps96m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
 //{ useNewUrlParser: true ,useUnifiedTopology: true },
 //()=>console.log('Connected to DB'));
 //Import routes
const authRoute=require('./routes/user');
const planRoute = require('./routes/planning');
const discussion = require('./routes/discussionRoute');
const sharing = require('./routes/sharing');
 


app.use(express.json({extended:false}));

app.use(cors());
//Route middlewares
app.use('/user', authRoute);
app.use('/routes/planning', planRoute);
app.use('/discuss', discussion);
app.use('/share', sharing);


app.listen(3000,() => console.log("Server up and running"));
app.use((req,res)=>{
    console.log("User requested a resource which is unavailable");
    res.status(404).send('Resource not found');
});
