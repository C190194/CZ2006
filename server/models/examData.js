const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const examSchema=new Schema({
    courseCode:{
        type: String,
        unique: true,
        required: true
    },
    date:{
        type: String,
        unique: false,
        required: true
    },
    day:{
        type: String,
        unique: false,
        required: true
    },
    time:{
        type: String,
        unique: false,
        required: true
    },
    duration:{
        type: Number,
        unique: false,
        required: true
    }
});


const ExamDate=mongoose.model('DatabaseExam',examSchema);
module.exports=ExamDate;