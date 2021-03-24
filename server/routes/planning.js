//importing modules
const express=require('express');

//importing controllers
const plannner=require('../controllers/plannner');

//express router
const router=express.Router();

var times = { "0830": {}, "0900": {}, "0930": {}, "1000": {}, "1030": {}, "1100": {}, "1130": {}, "1200": {}, "1230": {}, "1300": {}, "1330": {},
                "1400": {}, "1430": {}, "1500": {}, "1530": {}, "1600": {}, "1630": {}, "1700": {}, "1730": {}, "1800": {}, "1830": {}, "1900": {},
                "1930": {}, "2000": {}, "2030": {}, "2100": {}, "2130": {}, "2200": {}, "2230": {}, "2300": {}};

timetable = {
    MON: times,
    TUE: times,
    WED: times,
    THU: times,
    FRI: times,
    SAT: times
};

var temp_timetable = timetable;
const all_timetables = [];

//routing
// route called in the beginning after login for basic student details
router.get('/plan_timetable', plannner(input_courses,temp_timetable));

module.exports=router;