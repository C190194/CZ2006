//importing modules
const express=require('express');

//importing controllers
const plannner=require('../controllers/plannner');

//express router
const router=express.Router();

var times = { "0830": {}, "0900": {}, "0930": {}, "1000": {}, "1030": {}, "1100": {}, "1130": {}, "1200": {}, "1230": {}, "1300": {}, "1330": {},
                "1400": {}, "1430": {}, "1500": {}, "1530": {}, "1600": {}, "1630": {}, "1700": {}, "1730": {}, "1800": {}, "1830": {}, "1900": {},
                "1930": {}, "2000": {}, "2030": {}, "2100": {}, "2130": {}, "2200": {}, "2230": {}, "2300": {}};
//console.log(times);
timetable = {
    MON: times,
    TUE: times,
    WED: times,
    THU: times,
    FRI: times,
    SAT: times
};

var temp_timetable = timetable;
var all_timetables = [];

input_courses = [{"courseCode": "AAA08B", "name": "FASHION & DESIGN: WEARABLE ART AS A SECOND SKIN*", "au": 3.0, "index": [{"index_number": "39676", "lesson": [{"type": "LEC/STUDIO", "group": "L1", "day": "WED", "full": "1130-1430", "start": "1130", "end": "1430", "duration": 3, "location": "NIE7-02-07", "flag": 0, "remarks": "", "date_w1": "2021-08-11", "weekList": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}, {"index_number": "39677", "lesson": [{"type": "LEC/STUDIO", "group": "L2", "day": "WED", "full": "1430-1730", "start": "1430", "end": "1730", "duration": 3, "location": "NIE7-02-07", "flag": 0, "remarks": "", "date_w1": "2021-08-11", "weekList": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}, {"index_number": "39678", "lesson": [{"type": "LEC/STUDIO", "group": "L3", "day": "THU", "full": "1130-1430", "start": "1130", "end": "1430", "duration": 3, "location": "NIE7-02-07", "flag": 0, "remarks": "", "date_w1": "2021-08-12", "weekList": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}, {"index_number": "39679", "lesson": [{"type": "LEC/STUDIO", "group": "L4", "day": "THU", "full": "1430-1730", "start": "1430", "end": "1730", "duration": 3, "location": "NIE7-02-07", "flag": 0, "remarks": "", "date_w1": "2021-08-12", "weekList": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}], "clashFree": false}, {"courseCode": "AAA08C", "name": "EXPRESSIVE DRAWING: DEVELOPING PERSONAL APPROACH & STYLE*", "au": 3.0, "index": [{"index_number": "39673", "lesson": [{"type": "LEC/STUDIO", "group": "LE", "day": "MON", "full": "0930-1230", "start": "0930", "end": "1230", "duration": 3, "location": "NIE3-B2-01", "flag": 0, "remarks": "", "date_w1": "2021-08-09", "weekList": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}], "clashFree": false}, {"courseCode": "AAA08D", "name": "ABSTRACT PAINTING: WHY IT'S HERE & HOW IT'S MADE*", "au": 3.0, "index": [{"index_number": "39674", "lesson": [{"type": "LEC/STUDIO", "group": "L1", "day": "MON", "full": "1230-1530", "start": "1230", "end": "1530", "duration": 3, "location": "NIE3-B2-01", "flag": 0, "remarks": "", "date_w1": "2021-08-09", "weekList": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}, {"index_number": "39675", "lesson": [{"type": "LEC/STUDIO", "group": "L2", "day": "FRI", "full": "0930-1230", "start": "0930", "end": "1230", "duration": 3, "location": "NIE3-B2-01", "flag": 0, "remarks": "", "date_w1": "2021-08-13", "weekList": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}], "clashFree": false}, {"courseCode": "AAA18D", "name": "LIFE DRAWING*", "au": 3.0, "index": [{"index_number": "39667", "lesson": [{"type": "LEC/STUDIO", "group": "L1", "day": "TUE", "full": "1130-1430", "start": "1130", "end": "1430", "duration": 3, "location": "NIE3-B2-01", "flag": 0, "remarks": "", "date_w1": "2021-08-10", "weekList": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}, {"index_number": "39668", "lesson": [{"type": "LEC/STUDIO", "group": "L2", "day": "TUE", "full": "1430-1730", "start": "1430", "end": "1730", "duration": 3, "location": "NIE3-B2-01", "flag": 0, "remarks": "", "date_w1": "2021-08-10", "weekList": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}]}], "clashFree": false}]


//routing
// route called in the beginning after login for basic student details
router.get('/send_timetable', plannner.send_timetable);

module.exports=router;