const { models } = require("mongoose");
const CourseModal= require("../models/course.js");

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


function plan_timetable(input_courses, temp_timetable){
    
    
    //insert course 1 ke index
    for(var i=0;i<input_courses[0]["index"].length;i++)
    {
        
        if(!check_clash(input_courses[0]["courseCode"],input_courses[0]["index"][i],temp_timetable))
        {
            var tt = allot_course(input_courses[0]["courseCode"],input_courses[0]["index"][i],temp_timetable);
        
            all_timetables.push(tt);
            for (var member in all_timetables) delete temp_timetable[member];
     
        }  
    }

    if(all_timetables.length==0)
    {
        return ["fixed time slot is clashing with "+input_courses[0]["courseCode"]];
    }

    for(var i=1;i<input_courses.length;i++)
    {
        const indexList=input_courses[i]["index"];
        const arrlist=[];
        
        for (var j=0;j< indexList.length;j++)
        {
            for(var k=0;k<all_timetables.length;k++)
            {
                if(check_clash(input_courses[i]["courseCode"],indexList[j],all_timetables[k]))
                {
                    console.log("clash");
                    continue;
                }
                else{
                    
                    //add the j index to kth timetable and store separately
                    var tt = allot_course(input_courses[i]["courseCode"],indexList[j],all_timetables[k]);
                    console.log(input_courses[i]["courseCode"] + " allotted");
                    arrlist.push(tt);
                }
            }
            
        }
        //add the separartely stored courses to all_timetables and remove the previous ones
        all_timetables=[];
        if(arrlist.length ==0)
        {
            return ["Cannot allott course because of clash "+input_courses[i]["courseCode"]];
        }
        Array.prototype.push.apply(all_timetables, arrlist);
    }
    return all_timetables;
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj[start].hasOwnProperty(key))
            return false;
    }
    return true;
}

function check_clash(courseCode, index, temp_timetable)
{
    var lesson = index["lesson"];
    var numLessons = lesson.length;
    var i;
    for(i=0;i<numLessons;i++)
    {
        var timeDetails=lesson[i].time;
        var start=timeDetails.start;
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
            if(!(JSON.stringify(temp_timetable[day][start]) === '{}'))
            {
                var k;
                if(temp_timetable[day][start][0]=="000000")
                {
                    return true;
                }
                
                for(k=0;k<13;k++)
                {
                    if(temp_timetable[day][start][3][k]==weeks[k]==1)
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
    return false;
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
            var newLessonList = index["lesson"];
            
                 for (var l = 0; l < newLessonList.length; l++){
                        var day = newLessonList[l].day;
                        var t = parseInt(newLessonList[l].start);
                        var end = parseInt(newLessonList[l].end);
                        
                        while (t < end){
                            var t_str = t.toString();
                            if (t < 1000){
                                var t_str = "0" + t_str;
                            }
                            copiedTT[day][t_str] = [courseCode,index["index_number"],newLessonList[l]['type'],
                                                                newLessonList[l]['weekList']] ;
                            
                            if (t_str.endsWith("30")){
                                t = t + 70;
                            } else {
                                t = t + 30;
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
module.exports=plan_timetable;
