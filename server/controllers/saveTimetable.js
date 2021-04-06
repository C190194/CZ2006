const Timetable = require('../models/timetable');

const saveTimetable  = async(req, res)=>{
    const {timetableID,courseSelected,courseFixed, fixedTimeSlots,courseClashAllowed} = req.body;

    for (courseCode in courseSelected){

    }

    const timetable = new Timetable({
        timetableID: timetableID,
        courseSelected:{courseCode:  courseSelected[i]["courseCode"], index_number:courseSelected[i]["index_number"]} ,
        fixedTimeSlots: fixedTimeSlots,
        courseFixed: courseFixed,
        courseClashAllowed: courseClashAllowed
    })
    //result = JSON.parse(JSON.stringify(timetable));
    console.log(timetable);
    timetable.save().then((timetable)=>{
        console.log(timetable);
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).send(err);
    });
}

const getsavedTimetable = async(req,res)=>{
    try{
    const timetableID = req.body.timetableID;
    const result = await Timetable.find({timetableID: timetableID});
    res.status(200).send(result);
    }
    catch{
        res.status(400).send(err);
    };
}

module.exports = {saveTimetable,
                  getsavedTimetable
                };