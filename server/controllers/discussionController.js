const Discussion = require('../models/discussionModel');
const User = require('../models/user');
const Course = require('../models/course');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var CourseContent = mongoose.model('CourseContent', new Schema(), 'CourseContent');


const discussion_index=(req,res)=>{
    //return list of all schools

    //return list of top 4 rated courses by general or by school
    res.status(200).send('Done');
};


const course_page=async(req,res)=>{
    try{
        const courseCode = req.params.id;
        console.log(courseCode);
        const Dis = await Discussion.findOne({courseCode:courseCode});
        if (Dis) res.status(200).send(Dis);
        else res.status(400).send("Page doesn't exist!");
    }
    catch (err){
        res.status(400).send(err);
    }
};

const update_course_page=async(req,res)=>{
    try{
        const courseCode = req.params.id;
        console.log(courseCode);

        let temp = await Discussion.find({courseCode:courseCode});
        temp=temp[0];
        
        console.log(temp.numReviews);
        const numRev = temp.numReviews + 1;
        let use = 0;
        let ease = 0;
        let time=0;

        if (temp.usefulness) {
            use = temp.usefulness;
            ease = temp.easiness;
            time = temp.timeInvestment;
        }

        const setUse = use + ((req.body.usefulness-use)/numRev);
        const setEase = ease + ((req.body.easiness-ease)/numRev);
        const setTime = time + ((req.body.timeInvestment-time)/numRev);

        const studentsRated = temp.studentsRated;
        let studentHasComment = false;

        for (i=0; i < studentsRated.length; i++) {
            if (req.body.studentsRated == studentsRated[i]) studentHasComment = true;
        }

        if (!studentHasComment) {
            // console.log(use, req.body.usefulness, (req.body.usefulness-use), temp.numReviews, (req.body.usefulness-use)/numRev);
            await Discussion.updateOne(
                {
                    courseCode:req.params.id
                },
                {
                    $push:{
                        comments:{
                            studentId: req.body.studentId,
                            commentBody: req.body.commentBody
                        },
                        studentsRated:req.body.studentsRated
                    },
                    $inc: {
                        numReviews:1
                    },
                    $set: {
                        usefulness: setUse,
                        easiness: setEase,
                        timeInvestment: setTime,
                    }
                }
            );
        }
        temp = await Discussion.findOne({courseCode:courseCode});
        res.status(200).send(temp);
    }
    catch (err){
        res.status(400).send(err);
    }
}

const add_course_page=async(req, res)=>{
    // res.status(200).send('OK!');
    try {
        // res.status(200).send('Done adding courses!');
        console.log(-1);
        let courseList = await CourseContent.find({}, function(err) {
            if (err) { 
                console.log(err);
            }
        });

        console.log(100);
        for (i=0; i < courseList.length; i++) {
            var temp = courseList[i].toJSON();

            console.log(temp)
            const Dis =new Discussion({
                courseCode: temp.courseCode,
                courseInfo:temp.details
            });
            console.log(Dis)

            Dis.save().then((result)=>{
                console.log(result);})
                 .catch((err)=>{
                     console.log(err);});

        }
        // res.status(200).send('Done adding courses!');
    }
    catch (err) {
        res.status(400).send(err);
    }
}

module.exports={
    discussion_index,
    course_page,
    update_course_page,
    add_course_page
}