//importing modules
const express=require('express');

//importing controllers
const plannner=require('../controllers/plannner');

//express router
const router=express.Router();




//routing
// route called in the beginning after login for basic student details
router.get('/plan_timetable', plannner(input_courses,temp_timetable));

module.exports=router;