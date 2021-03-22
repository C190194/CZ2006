//importing modules
const express=require('express');

//importing controllers
const plannner=require('../controllers/plannner');

//express router
const router=express.Router();

var times = { 0830: {}, 0900: {}, 0930: {}, 1000: {}, 1030: {}, 1100: {}, 1130: {}, 1200: {}, 1230: {}, 1300: {}, 1330: {},
                1400: {}, 1430: {}, 1500: {}, 1530: {}, 1600: {}, 1630: {}, 1700: {}, 1730: {}, 1800: {}, 1830: {}, 1900: {},
                1930: {}, 2000: {}, 2030: {}, 2100: {}, 2130: {}, 2200: {}, 2230: {}, 2300: {}};

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

input_courses = [{"courseCode": "AAA08B", "courseDetails": {"name": "FASHION & DESIGN: WEARABLE ART AS A SECOND SKIN*", "au": " 3.0 AU", "index": [{"index_number": "39676", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "WED", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "NIE7-02-07", "flag": 0, "remarks": ""}]}, {"index_number": "39677", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "WED", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "NIE7-02-07", "flag": 0, "remarks": ""}]}, {"index_number": "39678", "details": [{"type": "LEC/STUDIO", "group": "L3", "day": "THU", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "NIE7-02-07", "flag": 0, "remarks": ""}]}, {"index_number": "39679", "details": [{"type": "LEC/STUDIO", "group": "L4", "day": "THU", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "NIE7-02-07", "flag": 0, "remarks": ""}]}]}}, 
                 {"courseCode": "AAA08C", "courseDetails": {"name": "EXPRESSIVE DRAWING: DEVELOPING PERSONAL APPROACH & STYLE*", "au": " 3.0 AU", "index": [{"index_number": "39673", "details": [{"type": "LEC/STUDIO", "group": "LE", "day": "MON", "time": {"full": "0930-1230", "start": "0930", "end": "1230", "duration": 3}, "location": "NIE3-B2-01", "flag": 0, "remarks": ""}]}]}}, {"courseCode": "AAA08D", "courseDetails": {"name": "ABSTRACT PAINTING: WHY IT'S HERE & HOW IT'S MADE*", "au": " 3.0 AU", "index": [{"index_number": "39674", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "MON", "time": {"full": "1230-1530", "start": "1230", "end": "1530", "duration": 3}, "location": "NIE3-B2-01", "flag": 0, "remarks": ""}]}, {"index_number": "39675", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "FRI", "time": {"full": "0930-1230", "start": "0930", "end": "1230", "duration": 3}, "location": "NIE3-B2-01", "flag": 0, "remarks": ""}]}]}}, {"courseCode": "AAA18D", "courseDetails": {"name": "LIFE DRAWING*", "au": " 3.0 AU", "index": [{"index_number": "39667", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "TUE", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "NIE3-B2-01", "flag": 0, "remarks": ""}]}, {"index_number": "39668", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "TUE", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "NIE3-B2-01", "flag": 0, "remarks": ""}]}]}}, {"courseCode": "AAA18E", "courseDetails": {"name": "DRAWING*", "au": " 3.0 AU", "index": [{"index_number": "39659", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "MON", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "3C-B2-01", "flag": 0, "remarks": ""}]}, {"index_number": "39660", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "MON", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "3C-B2-01", "flag": 0, "remarks": ""}]}, {"index_number": "39661", "details": [{"type": "LEC/STUDIO", "group": "L3", "day": "TUE", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "3C-B2-01", "flag": 0, "remarks": ""}]}, {"index_number": "39662", "details": [{"type": "LEC/STUDIO", "group": "L4", "day": "TUE", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "3C-B2-01", "flag": 0, "remarks": ""}]}, {"index_number": "39663", "details": [{"type": "LEC/STUDIO", "group": "L5", "day": "WED", "time": {"full": "1530-1830", "start": "1530", "end": "1830", "duration": 3}, "location": "NIE3-B1-05", "flag": 0, "remarks": ""}]}, {"index_number": "39664", "details": [{"type": "LEC/STUDIO", "group": "L6", "day": "FRI", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "NIE3-B1-05", "flag": 0, "remarks": ""}]}, {"index_number": "39665", "details": [{"type": "LEC/STUDIO", "group": "L7", "day": "THU", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "NIE-B1-05", "flag": 0, "remarks": ""}]}, {"index_number": "39666", "details": [{"type": "LEC/STUDIO", "group": "L8", "day": "THU", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "3C-B2-01", "flag": 0, "remarks": ""}]}]}},
                 {"courseCode": "AAA18G", "courseDetails": {"name": "TABLETOP GAME DESIGN I*", "au": " 3.0 AU", "index": [{"index_number": "39652", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "MON", "time": {"full": "1630-1930", "start": "1630", "end": "1930", "duration": 3}, "location": "NIE3-B1-05", "flag": 0, "remarks": ""}]}, {"index_number": "39653", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "FRI", "time": {"full": "1630-1930", "start": "1630", "end": "1930", "duration": 3}, "location": "NIE3-B1-05", "flag": 0, "remarks": "Teaching Wk1-4,6-11,13"}]}]}},
                 {"courseCode": "AAA18H", "courseDetails": {"name": "PAINTING WITH OIL & ACRYLIC*", "au": " 3.0 AU", "index": [{"index_number": "39647", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "WED", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "NIE3-B2-01", "flag": 0, "remarks": ""}]}, {"index_number": "39648", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "WED", "time": {"full": "0830-1130", "start": "0830", "end": "1130", "duration": 3}, "location": "NIE3-B2-01", "flag": 0, "remarks": ""}]}]}}, 
                 {"courseCode": "AAA18J", "courseDetails": {"name": "PAINTING WITH WATERCOLOUR*", "au": " 3.0 AU", "index": [{"index_number": "39649", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "WED", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "NIE3-B2-01", "flag": 0, "remarks": ""}]}, {"index_number": "39650", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "MON", "time": {"full": "0830-1130", "start": "0830", "end": "1130", "duration": 3}, "location": "NIE3-B1-10", "flag": 0, "remarks": ""}]}, {"index_number": "39651", "details": [{"type": "LEC/STUDIO", "group": "L3", "day": "THU", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "NIE3-B2-01", "flag": 0, "remarks": ""}]}]}}, {"courseCode": "AAA18K", "courseDetails": {"name": "COMMUNICATION DESIGN*", "au": " 3.0 AU", "index": [{"index_number": "39680", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "FRI", "time": {"full": "0930-1230", "start": "0930", "end": "1230", "duration": 3}, "location": "NIE3-B1-06", "flag": 0, "remarks": "Teaching Wk1-4,6-11,13"}]}, {"index_number": "39681", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "FRI", "time": {"full": "1330-1630", "start": "1330", "end": "1630", "duration": 3}, "location": "NIE3-B1-06", "flag": 0, "remarks": "Teaching Wk1-4,6-11,13"}]}]}}, {"courseCode": "AAA18M", "courseDetails": {"name": "BATIK*", "au": " 3.0 AU", "index": [{"index_number": "39654", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "MON", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "NIE3-B1-10", "flag": 0, "remarks": ""}]}, {"index_number": "39655", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "MON", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "NIE3-B1-10", "flag": 0, "remarks": ""}]}, {"index_number": "39656", "details": [{"type": "LEC/STUDIO", "group": "L3", "day": "TUE", "time": {"full": "1030-1330", "start": "1030", "end": "1330", "duration": 3}, "location": "NIE3-B1-10", "flag": 0, "remarks": ""}]}, {"index_number": "39657", "details": [{"type": "LEC/STUDIO", "group": "L4", "day": "TUE", "time": {"full": "1330-1630", "start": "1330", "end": "1630", "duration": 3}, "location": "NIE3-B1-10", "flag": 0, "remarks": ""}]}, {"index_number": "39658", "details": [{"type": "LEC/STUDIO", "group": "L5", "day": "FRI", "time": {"full": "1030-1330", "start": "1030", "end": "1330", "duration": 3}, "location": "NIE3-B1-10", "flag": 0, "remarks": "Teaching Wk1-4,6-11,13"}]}]}}, 
                 {"courseCode": "AAA18Q", "courseDetails": {"name": "PRINTMAKING*", "au": " 3.0 AU", "index": [{"index_number": "39640", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "MON", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "NIE3-B1-08", "flag": 0, "remarks": ""}]}, {"index_number": "39641", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "WED", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "NIE3-B1-08", "flag": 0, "remarks": ""}]}]}}, {"courseCode": "AAA18R", "courseDetails": {"name": "SCULPTURE*", "au": " 3.0 AU", "index": [{"index_number": "39642", "details": [{"type": "LEC/STUDIO", "group": "L1", "day": "THU", "time": {"full": "0830-1130", "start": "0830", "end": "1130", "duration": 3}, "location": "NIE3-B3-01", "flag": 0, "remarks": ""}]}, {"index_number": "39643", "details": [{"type": "LEC/STUDIO", "group": "L2", "day": "THU", "time": {"full": "1130-1430", "start": "1130", "end": "1430", "duration": 3}, "location": "NIE3-B3-01", "flag": 0, "remarks": ""}]}, {"index_number": "39644", "details": [{"type": "LEC/STUDIO", "group": "L3", "day": "FRI", "time": {"full": "1430-1730", "start": "1430", "end": "1730", "duration": 3}, "location": "NIE3-B3-01", "flag": 0, "remarks": "Teaching Wk1-4,6-11,13"}]}]}}, {"courseCode": "AAA28C", "courseDetails": {"name": "DIGITAL MEDIA & VISUAL ARTS: STILL IMAGING*", "au": " 3.0 AU", "index": [{"index_number": "39672", "details": [{"type": "LEC/STUDIO", "group": "LE", "day": "THU", "time": {"full": "1230-1530", "start": "1230", "end": "1530", "duration": 3}, "location": "NIE3-B1-06", "flag": 0, "remarks": ""}]}]}}, {"courseCode": "AAA28E", "courseDetails": {"name": "VISUAL ARTS IN ASIA*", "au": " 3.0 AU", "index": [{"index_number": "39670", "details": [{"type": "LEC/STUDIO", "group": "LE", "day": "MON", "time": {"full": "1230-1530", "start": "1230", "end": "1530", "duration": 3}, "location": "NIE-TR504", "flag": 0, "remarks": ""}]}]}}];
//routing
// route called in the beginning after login for basic student details
router.get('/plan_timetable', plannner(input_courses,temp_timetable));
//route called for progress bar
//router.get('/getProgress', detailsControllers.getProgress);
//
//router.get('/getLeaderboard',detailsControllers.getLeaderboard);

//exporting router
module.exports=router;