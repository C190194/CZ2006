const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//definining the schema of a comment
const comment = new Schema({
    studentId:{
        type: String,
        required: true
    },
    commentBody: {
        type: String,
        required: true
    }
});

//defining the schema of discussion forum
const discussion = new Schema({
    courseCode:{
        type: String,
        unique: true,
        required: true
        },
    courseInfo:{
        type: [[String]]
    },
    numReviews:{
        type: Number,
        default:0,
        min:0
    },
    studentsRated:{
        //list of emails are stored here
        type:[String],
        default: []
    },
    usefulness: {
        type: Number,
        min: 1,
        max: 10,
        default:null
    },
    easiness: {
        type: Number,
        min: 1,
        max: 10,
        default:null
    },
    timeInvestment: {
        type: Number,
        min: 1,
        max: 10,
        default:null
    },
    comments: [comment]
});

//making the mongoose model and exporting it
const Discussion= mongoose.model('Discussion', discussion);
module.exports=Discussion;