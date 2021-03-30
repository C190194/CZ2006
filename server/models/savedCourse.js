const mongoose = require('mongoose');

const savedCourses = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    savedCourse:{
        type:[String],
        required: true
    },

});

const SavedCourse = mongoose.model('savedCourse',savedCourses);
module.exports = SavedCourse;