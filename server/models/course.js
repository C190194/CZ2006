const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSchema=new Schema({
    full:{
        type: String,
        unique: false,
        required: true
    },
    start:{
        type: String,
        unique: false,
        required: true
    },
    end:{
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

const lessonSchema=new Schema({
    type:{
        type: String,
        unique: false,
        required: true
    },
    group:{
        type: String,
        unique: false,
        required: true
    },
    day:{
        type: String,
        unique: false,
        required: true
    },
    time: {
        type: timeSchema,
        unique: false,
        required: true
    },
    location:{
        type: String,
        unique: false,
        required: true
    },
    flag: Number,
    remarks:{
        type: String,
        unique: false,
        required: false
    },
    date_w1:{
        type: String,
        unique: true,
        required: true
    },
    weekList:{
        type: [Number],
        unique: false,
        required: true
    }
});

const indexSchema=new Schema({
    index_number:{
        type: Number,
        unique: true,
        required:true
    },
    lesson:
        {
            type: [lessonSchema],
            unique: false,
            required:true 
        }
    
});
//defining a subschema of course

const courseSchema=new Schema({
    courseCode:{
        type: String,
        unique: true,
        required: true
        },
    name:{
        type: String,
        unique: true,
        required: true
    },
    au:{
        type: int,
        unique: true,
        required: true
    },
    index:[indexSchema]
});

const Course=mongoose.model('Course',courseSchema);
module.exports=Course;