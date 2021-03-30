const Discussion = require('../models/discussionModel');
const User = require('../models/user');
const Course = require('../models/course');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const CourseContent = require('../models/courseContent');
var CourseContent = mongoose.model('CourseContent', new Schema(), 'CourseContent');


const discussion_index=(req,res)=>{
    //return list of all schools

    //return list of top 4 rated courses by general or by school
    res.status(200).send('Done');
};


const course_page=async(req,res)=>{
    res.status(200).send(req);
};

const update_course_page=(req,res)=>{
    //update ratings

    //update other settings
    return 2;
}

const add_course_page=(req, res)=>{
    res.status(200).send('OK!');
    // try {
    //     res.status(200).send('Done adding courses!');
    //     console.log(-1);
    //     let courseList = CourseContent.find({}, function(err) {
    //         if (err) { 
    //             console.log(err);
    //         }
    //     });

    //     console.log(100);
    //     for (i=0; i < 2; i++) {
    //         courseList[i] = courseList[i].toJSON();

    //         console.log(i)
    //         const Dis =new Discussion({
    //             courseCode: courseList[i].courseCode,
    //             courseInfo:courseList[i].details
    //         });
    //         console.log(Dis)

    //         // Dis.save().then((result)=>{
    //         //     console.log(result);})
    //         //      .catch((err)=>{
    //         //          console.log(err);});
    //         console.log(i)

    //     }
    //     res.status(200).send('Done adding courses!');
    // }
    // catch (err) {
    //     res.status(400).send(err);
    // }
}

module.exports={
    discussion_index,
    course_page,
    update_course_page,
    add_course_page
}