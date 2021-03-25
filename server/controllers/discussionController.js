const Discussion = require('../models/discussionModel');
const User = require('../models/user');
const Course = require('../models/course');


const discussion_index=(req,res)=>{
    //return list of all schools

    //return list of top 4 rated courses by general or by school

    return 2;
};

const course_page=(req,res)=>{
    return 2;
};

const update_course_page=(req,res)=>{
    //update ratings

    //update other settings
    return 2;
}

module.exports={
    discussion_index,
    course_page,
    update_course_page
}