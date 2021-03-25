const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//definining the schema of a comment
const comment = new Schema({
    studentId:{
        type: String,
        required: true
    },
    commentID: {
        type: Number,
        unique: true,
        required: true
    },
    commentBody: {
        type: String,
        required: true
    },
    commentReply: {
        replies:[reply]
    }
});

//definining the schema of a reply to a comment
const reply = new Schema({
    studentId:{
        type: String,
        required: true
    },
    replyID: {
        type: Number,
        unique: true,
        required: true
    },
    replyBody: {
        type:String,
        require:true
    }
});

//defining the schema of discussion forum
const discussion = new Schema({
    courseCode:{
        type: String,
        unique: true,
        required: true
        },
    numReviews:{
        type: Number,
        default:0,
        min:0
    },
    studentsRated:{
        //list of emails are stored here
        type:[String]
    },
    usefulness: {
        type: Number,
        min: 1,
        max: 10
    },
    easiness: {
        type: Number,
        min: 1,
        max: 10
    },
    timeInvestment: {
        type: Number,
        min: 1,
        max: 10
    },
    comments: [comment]
});

//making the mongoose model and exporting it
const Discussion= mongoose.model('Discussion', discussion);
module.exports=Discussion;