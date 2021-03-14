const express = require ('express');
const app= express();
const connectDB = require('./DB/Connection')
const mongoose=require('mongoose');

connectDB();
// mongoose.connect("mongodb+srv://Akshat:SoftwareXeon123@cluster0.ps96m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
// { useNewUrlParser: true ,useUnifiedTopology: true },
// ()=>console.log('Connected to DB'));
// //Import routes
const authRoute=require('./routes/user');


app.use(express.json({extended:false}));
//Route middlewares
app.use('/api/user', authRoute);


app.listen(3000,() => console.log("Server up and running"));
