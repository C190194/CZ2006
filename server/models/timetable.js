const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining a subschema of course
const course=new Schema({
    courseNo:{
        type: String,
        unique: true,
        required: true
        },
    indexNo:{
        type: Number,
        unique: true,
        required:true
    }
})

//defining the schema of timetable
const timetableSchema = new Schema({
    timetableID:{
        unique: true,
        type: Number,
        required: true,
        min:1
    },
    courseSelected:{
        type: [course],
        required: true
    },
    // each integer encodes a time slot
    fixedTimeSlots:{
        type: [Number],
        min: 11
    },
    courseFixed:{
        type: [course]
    },
    courseClashAllowed:{
        type: [course]
    },
});

//making the mongoose model and exporting it
const Timetable= mongoose.model('Timetable', timetableSchema);
module.exports=Timetable;