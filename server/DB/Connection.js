const mongoose = require('mongoose');

const URI = "mongodb+srv://astha:SoftwareXeon123@cluster0.ps96m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('db connected..!');
  };
  
  module.exports = connectDB;