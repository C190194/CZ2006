//importing modules
const express=require('express');

//importing controllers
const icsConverter = require('../controllers/icsConversion');

//express router
const router=express.Router();

//routing
router.post('/get_ics_string', icsConverter.createICS);

module.exports=router;