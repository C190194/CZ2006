const mongoose = require('mongoose');

const URI = "mongodb+srv://Akshat:SoftwareXeon123@cluster0.ps96m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then((result) =>console.log('db connected..!'))
    //.except((err) => console.log(err));
  };
  
  module.exports = connectDB;