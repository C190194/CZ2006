const mongoose = require('mongoose');

const user = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    courseOfStudy:{
        type: String,
        required: true
    },
    yearOfStudy:{
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('user',user);