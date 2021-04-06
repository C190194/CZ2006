//importing modules
const express=require('express');

//importing controllers
const saveTimetable=require('../controllers/saveTimetable');

//express router
const router=express.Router();

//routing
router.put('/saveTimetable', saveTimetable.saveTimetable);
router.get('/getSavedTimetable',saveTimetable.getsavedTimetable);
//exporting router
module.exports=router;