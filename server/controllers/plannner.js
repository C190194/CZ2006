const { models } = require("mongoose");
const CourseModal= require("../models/course.js");

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

function plan_timetable(input_courses, temp_timetable){
    var original_timetable = temp_timetable;

    if(input_courses.length === 0){
        for(var key of Object.keys(temp_timetable)){
            for(var k of Objects.keys(temp_timetable[key])){
                if((Object.keys(temp_timetable[key][k])).length==0)
                {
                    delete temp_timetable[key][k];
                }
                
            }
            //if entire day empty then remove
        }
        

    }
    console.log(input_courses[0]["courseDetails"]["index"]);
    //insert course 1 ke index
    for(var i=0;i<input_courses[0]["courseDetails"]["index"].length;i++)
    {
        var tt = allot_course(input_courses[0]["courseCode"],input_courses[0]["courseDetails"]["index"][i],temp_timetable);
        for (var member in all_timetables) delete temp_timetable[member];
       all_timetables.push(tt);
    }
    for(var i=1;i<input_courses.length;i++)
    {
        const indexList=input_courses[i]["courseDetails"]["index"];
        var arrlist=[]
        for (var j=0;j< indexList.length;j++)
        {
            for(var k=0;k<all_timetables.length;k++)
            {
                if(check_clash(input_courses[i]["courseCode"],indexList[j],all_timetables[k]))
                {
                    continue;
                }
                else{
                    //add the j index to kth timetable and store separately
                    var tt = allot_course(input_courses[i]["courseCode"],indexList[j],all_timetables[k]);
                    arrlist.push(tt);
                }
            }
            
        }
        //add the separartely stored courses to all_timetables and remove the previous ones
        for (var member in all_timetables) delete all_timetables[member];
        Array.prototype.push.apply(all_timetables, arrList);
        
    }
    return all_timetables;
}

function check_clash(courseCode, index, temp_timetable)
{
    var lesson = index["details"];
    var numLessons = lesson.length;
    var i;
    for(i=0;i<numLessons;i++)
    {
        var timeDetails=lesson[i].time;
        // var full=timeDetails.full;
        var start=timeDetails.start;
        // var end=timeDetails.end;
        var duration=timeDetails.duration;
        var day=lesson[i].day;
        var weeks=lesson[i].weekList;
        var j;
        const inc=[];
        if(start.slice(-2)=="00")
        {
            inc.push(30);
            inc.push(70);
        }
        else{
            inc.push(70);
            inc.push(30);
        }
        for(j=0;j<duration*2;j++)
        {
            if(temp_timetable[day][start]!=null)
            {
                var k;
                for(k=0;k<13;k++)
                {
                    if(temp_timetable[day][start][courseCode][1][k]==weeks[k]==1)
                    {
                        return true;
                    }
                }
            }
            var incr=parseInt(start);
            incr=incr+inc[j%2];
            start=incr.toString();
            if(incr<1000)
            {
                start="0"+start;
            } 
        }
        
    }
    return true;
}

function allot_course(courseCode,index,temp_timetable){
    ///data = {"id" : courseCode,
            //      "index" : index_no,
            //      "flag" : detail["flag"],
            //      "type" : detail["type"],
            //      "location" : detail["location"],
            //      "group" : detail["group"],
            //      "remarks" : detail["remarks"]
            // };
            var copiedTT = JSON.parse(JSON.stringify(temp_timetable));
            for (var i = 0; i < index.length; i++){
                if (index[i].index_number == newIndex){
                    var newLessonList = index[i].lesson;
                    for (var l = 0; l < newLessonList.length; l++){
                        var day = newLessonList[l].day;
                        var t = parseInt(newLessonList[l].time.start);
                        var end = parseInt(newLessonList[l].time.end);
                        
                        while (t < end){
                            var t_str = t.toString();
                            if (t < 1000){
                                var t_str = "0" + t_str;
                            }
                            copiedTT[day][t_str][code] = [newLessonList[l].type,
                                                                newLessonList[l].weekList] ;
        
                            if (t_str.endsWith("30")){
                                t = t + 70;
                            } else {
                                t = t + 30;
                            }
                        }
                    }
                }
            }
            return copiedTT;

}

async function get_exam_details(courseCode,DatabaseExam){
    const examobj=await DatabaseExam.findOne({courseCode})
    if(!examobj){
        return -1
    }

    return examobj;
}

function check_exam_clash(input_courses){
    for(i = 0;i < input_courses.length;i++){
        exami = get_exam_details(input_courses[courseCode],DatabaseExam);
        if(exam == -1){
            exami_date = -1;
            exami_time = -1;
            exami = {};
            exami["course"] = input_courses[courseCode];
            exami["date"] = -1;
            exami["day"] = -1;
            exami["time"] = -1;
            exami["duration"] = -1;
        } else{
            exami_date = exami['date'];
            exami_time = exami['time'];
            exami_duration = exami['duration'];}
        for(j = i+1;j < (input_courses.length);j++){
            exam = get_exam_details(input_courses[courseCode],DatabaseExam);
            if(exam == -1){
            exam_date = -1;
            exam_time = -1;
            exam = {};
            exam["course"] = input_courses[courseCode];
            exam["date"] = -1;
            exam["day"] = -1;
            exam["time"] = -1;
            exam["duration"] = -1;
        } else{
            exam_date = exam['date'];
            exam_time = exam['time'];
            exam_duration = exam['duration'];
        }
        if(exami_date == exam_date)
        {
            if(exami_time <= exam_time && parseint(exami_time)+exami_duration >= exam_time)
            {
                return ["true",input_courses[i]['courseCode'],input_courses[j]['courseCode']];

            }
            else if(exam_time <= exami_time && parseint(exam_time)+exami_duration >= exami_time)
            {
                return ["true",input_courses[i]['courseCode'],input_courses[j]['courseCode']];

            }
        }
    }
    }
    return ["false",null,null];
}

//models.exports = {get_exam_details,check_exam_clash,plan_timetable,check_clash,allot_course};
module.exports=plan_timetable;
