


var timetable_MON = {
    "0830": {}, "0900": {}, "0930": {}, "1000": {}, "1030": {}, "1100": {}, "1130": {}, "1200": {}, "1230": {}, "1300": {}, 
    "1330": {}, "1400": {}, "1430": {}, "1500": {}, "1530": {}, "1600": {}, "1630": {}, "1700": {}, "1730": {}, "1800": {}, 
    "1830": {}, "1900": {}, "1930": {}, "2000": {}, "2030": {}, "2100": {}, "2130": {}, "2200": {}, "2230": {}, "2300": {}, 
    "0830": {}, "0900": {} 
};

var timetable_TUE = {
    "0830": {}, "0900": {}, "0930": {}, "1000": {}, "1030": {}, "1100": {}, "1130": {}, "1200": {}, "1230": {}, "1300": {}, 
    "1330": {}, "1400": {}, "1430": {}, "1500": {}, "1530": {}, "1600": {}, "1630": {}, "1700": {}, "1730": {}, "1800": {}, 
    "1830": {}, "1900": {}, "1930": {}, "2000": {}, "2030": {}, "2100": {}, "2130": {}, "2200": {}, "2230": {}, "2300": {}, 
    "0830": {}, "0900": {} 
};

var timetable_WED = {
    "0830": {}, "0900": {}, "0930": {}, "1000": {}, "1030": {}, "1100": {}, "1130": {}, "1200": {}, "1230": {}, "1300": {}, 
    "1330": {}, "1400": {}, "1430": {}, "1500": {}, "1530": {}, "1600": {}, "1630": {}, "1700": {}, "1730": {}, "1800": {}, 
    "1830": {}, "1900": {}, "1930": {}, "2000": {}, "2030": {}, "2100": {}, "2130": {}, "2200": {}, "2230": {}, "2300": {}, 
    "0830": {}, "0900": {} 
};

var timetable_THU = {
    "0830": {}, "0900": {}, "0930": {}, "1000": {}, "1030": {}, "1100": {}, "1130": {}, "1200": {}, "1230": {}, "1300": {}, 
    "1330": {}, "1400": {}, "1430": {}, "1500": {}, "1530": {}, "1600": {}, "1630": {}, "1700": {}, "1730": {}, "1800": {}, 
    "1830": {}, "1900": {}, "1930": {}, "2000": {}, "2030": {}, "2100": {}, "2130": {}, "2200": {}, "2230": {}, "2300": {}, 
    "0830": {}, "0900": {} 
};

var timetable_FRI = {
    "0830": {}, "0900": {}, "0930": {}, "1000": {}, "1030": {}, "1100": {}, "1130": {}, "1200": {}, "1230": {}, "1300": {}, 
    "1330": {}, "1400": {}, "1430": {}, "1500": {}, "1530": {}, "1600": {}, "1630": {}, "1700": {}, "1730": {}, "1800": {}, 
    "1830": {}, "1900": {}, "1930": {}, "2000": {}, "2030": {}, "2100": {}, "2130": {}, "2200": {}, "2230": {}, "2300": {}, 
    "0830": {}, "0900": {} 
};

var timetable_SAT = {
    "0830": {}, "0900": {}, "0930": {}, "1000": {}, "1030": {}, "1100": {}, "1130": {}, "1200": {}, "1230": {}, "1300": {}, 
    "1330": {}, "1400": {}, "1430": {}, "1500": {}, "1530": {}, "1600": {}, "1630": {}, "1700": {}, "1730": {}, "1800": {}, 
    "1830": {}, "1900": {}, "1930": {}, "2000": {}, "2030": {}, "2100": {}, "2130": {}, "2200": {}, "2230": {}, "2300": {}, 
    "0830": {}, "0900": {} 
};

var full_timetable = {
    "MON": timetable_MON,
    "TUE": timetable_TUE,
    "WED": timetable_WED,
    "THU": timetable_THU,
    "FRI": timetable_FRI,
    "SAT": timetable_SAT
};

var  courseArray= [
    {
        "courseCode": "AAAAA", 
        "name": "FASHION & DESIGN: WEARABLE ART AS A SECOND SKIN*", 
        "au": 3.0,// float
        "clashFree": true,// True or False
                     // True means this course doesn't have 
                     // fixed time, such as online courses
        "index": [
                {
                    "index_number": "A1", 
                    "lesson": [
                        {
                            "type": "LEC/STUDIO", 
                            "group": "L1", 
                            "day": "WED", 
                            "date_w1": "2021-08-11",// "2021-08-09"
                            "time": {
                                "full": "1130-1430", 
                                "start": "1130", 
                                "end": "1430", 
                                "duration": 3}, 
                            "location": "NIE7-02-07", 
                            "flag": 0, 
                            "remarks": "",
                            "weekList" : [1,1,1,1,1,1,1,1,1,1,1,1,1]// list with 13 elements
                                        // 0 for no course in that week
                                        // 1 for ~
                        }
                    ]
                },
                {
                    "index_number": "A2", 
                    "lesson": [
                        {
                            "type": "LEC/STUDIO", 
                            "group": "L1", 
                            "day": "WED", 
                            "date_w1": "2021-08-11",// "2021-08-09"
                            "time": {
                                "full": "1430-1730", 
                                "start": "1430", 
                                "end": "1730", 
                                "duration": 3}, 
                            "location": "NIE7-02-07", 
                            "flag": 0, 
                            "remarks": "",
                            "weekList" : [1,1,1,1,1,1,1,1,1,1,1,1,1]// list with 13 elements
                                        // 0 for no course in that week
                                        // 1 for ~
                        }
                    ]
                }
        ]
    },
    {
        "courseCode": "BBBBB", 
        "name": "FASHION & DESIGN: WEARABLE ART AS A SECOND SKIN*", 
        "au": 3.0,// float
        "clashFree": true,// True or False
                     // True means this course doesn't have 
                     // fixed time, such as online courses
        "index": [
            {
                "index_number": "B1", 
                "lesson": [
                    {
                        "type": "LEC/STUDIO", 
                        "group": "L1", 
                        "day": "WED", 
                        "date_w1": "2021-08-11",// "2021-08-09"
                        "time": {
                            "full": "1430-1730", 
                            "start": "1430", 
                            "end": "1730", 
                            "duration": 3}, 
                        "location": "NIE7-02-07", 
                        "flag": 0, 
                        "remarks": "",
                        "weekList" : [1,1,1,1,1,1,1,1,1,1,1,1,1]// list with 13 elements
                                    // 0 for no course in that week
                                    // 1 for ~
                    }
                ]
            },
            {
                "index_number": "B2", 
                    "lesson": [
                        {
                            "type": "LEC/STUDIO", 
                            "group": "L1", 
                            "day": "WED", 
                            "date_w1": "2021-08-11",// "2021-08-09"
                            "time": {
                                "full": "1730-2030", 
                                "start": "1730", 
                                "end": "2030", 
                                "duration": 3}, 
                            "location": "NIE7-02-07", 
                            "flag": 0, 
                            "remarks": "",
                            "weekList" : [1,1,1,1,1,1,1,1,1,1,1,1,1]// list with 13 elements
                                        // 0 for no course in that week
                                        // 1 for ~
                        }
                    ]
            }    
        ]
    },
    {
        "courseCode": "CCCCC", 
        "name": "FASHION & DESIGN: WEARABLE ART AS A SECOND SKIN*", 
        "au": 3.0,// float
        "clashFree": true,// True or False
                     // True means this course doesn't have 
                     // fixed time, such as online courses
        "index": [
                {
                    "index_number": "C1", 
                    "lesson": [
                        {
                            "type": "LEC/STUDIO", 
                            "group": "L1", 
                            "day": "WED", 
                            "date_w1": "2021-08-11",// "2021-08-09"
                            "time": {
                                "full": "0830-1130", 
                                "start": "0830", 
                                "end": "1130", 
                                "duration": 3}, 
                            "location": "NIE7-02-07", 
                            "flag": 0, 
                            "remarks": "",
                            "weekList" : [1,1,1,1,1,1,1,1,1,1,1,1,1]// list with 13 elements
                                        // 0 for no course in that week
                                        // 1 for ~
                        }
                    ]
                },
                {
                    "index_number": "C2", 
                    "lesson": [
                        {
                            "type": "LEC/STUDIO", 
                            "group": "L1", 
                            "day": "WED", 
                            "date_w1": "2021-08-11",// "2021-08-09"
                            "time": {
                                "full": "1430-1730", 
                                "start": "1430", 
                                "end": "1730", 
                                "duration": 3}, 
                            "location": "NIE7-02-07", 
                            "flag": 0, 
                            "remarks": "",
                            "weekList" : [1,1,1,1,1,1,1,1,1,1,1,1,1]// list with 13 elements
                                        // 0 for no course in that week
                                        // 1 for ~
                        }
                    ]
                }
        ]
    },
    {
        "courseCode": "DDDDD", 
        "name": "FASHION & DESIGN: WEARABLE ART AS A SECOND SKIN*", 
        "au": 3.0,// float
        "clashFree": true,// True or False
                     // True means this course doesn't have 
                     // fixed time, such as online courses
        "index": [
                {
                    "index_number": "D1", 
                    "lesson": [
                        {
                            "type": "LEC/STUDIO", 
                            "group": "L1", 
                            "day": "WED", 
                            "date_w1": "2021-08-11",// "2021-08-09"
                            "time": {
                                "full": "1130-1430", 
                                "start": "1130", 
                                "end": "1430", 
                                "duration": 3}, 
                            "location": "NIE7-02-07", 
                            "flag": 0, 
                            "remarks": "",
                            "weekList" : [1,1,1,1,1,1,1,1,1,1,1,1,1]// list with 13 elements
                                        // 0 for no course in that week
                                        // 1 for ~
                        }
                    ]
                },
                {
                    "index_number": "D2", 
                    "lesson": [
                        {
                            "type": "LEC/STUDIO", 
                            "group": "L1", 
                            "day": "WED", 
                            "date_w1": "2021-08-11",// "2021-08-09"
                            "time": {
                                "full": "1430-1730", 
                                "start": "1430", 
                                "end": "1730", 
                                "duration": 3}, 
                            "location": "NIE7-02-07", 
                            "flag": 0, 
                            "remarks": "",
                            "weekList" : [1,1,1,1,1,1,1,1,1,1,1,1,1]// list with 13 elements
                                        // 0 for no course in that week
                                        // 1 for ~
                        }
                    ]
                }
        ]
    },
    {
        "courseCode": "EEEEE", 
        "name": "FASHION & DESIGN: WEARABLE ART AS A SECOND SKIN*", 
        "au": 3.0,// float
        "clashFree": true,// True or False
                     // True means this course doesn't have 
                     // fixed time, such as online courses
        "index": [
                {
                    "index_number": "E1", 
                    "lesson": [
                        {
                            "type": "LEC/STUDIO", 
                            "group": "L1", 
                            "day": "WED", 
                            "date_w1": "2021-08-11",// "2021-08-09"
                            "time": {
                                "full": "1430-1730", 
                                "start": "1430", 
                                "end": "1730", 
                                "duration": 3}, 
                            "location": "NIE7-02-07", 
                            "flag": 0, 
                            "remarks": "",
                            "weekList" : [1,1,1,1,1,1,1,1,1,1,1,1,1]// list with 13 elements
                                        // 0 for no course in that week
                                        // 1 for ~
                        }
                    ]
                }
        ]
    }
];



function checkClash (newIndex){ // Dic -> {"code": lesson}, lesson -> [type, weekList]
    var clashCourses = []
    var newLessonList = newIndex.lesson;
    for (var l = 0; l < newLessonList.length; l++){
        var day = newLessonList[l].day;
        var t = parseInt(newLessonList[l].time.start);
        var end = parseInt(newLessonList[l].time.end);

        while (t < end){
            var t_str = t.toString();
            if (t < 1000){
                var t_str = "0" + t_str;
            }
            var timeslotDic = full_timetable[day][t_str];
            var newLesson = [newLessonList[l].type, newLessonList[l].weekList];
            if (Object.keys(timeslotDic).length == 1){ 
                var oldCode = Object.keys(timeslotDic)[0];
                var oldLesson = timeslotDic[oldCode];
                for (var i = 0; i < 13; i++){
                    if (oldLesson[1][i] && newLesson[1][i]){ // compare weeks
                        if (oldLesson[0]=="LEC/STUDIO" || newLesson[0]=="LEC/STUDIO"){ 
                            if (!clashCourses.includes(oldCode)){
                                clashCourses.push(oldCode); // clash acceptable
                            }
                        } else { // no lecture
                            return 0; // clash not acceptable
                        }
                    }
                    // no clash
                }
            } else if (Object.keys(timeslotDic).length == 2){
                return 0; // clash not acceptable
            }

        if (t_str.endsWith("30")){
            t = t + 70;
        } else {
            t = t + 30;
        }
        }
    } 
    return clashCourses; 
    
}

function removeIndex (code, indexObj){
    var oldLessonList = indexObj.lesson;
    for (var l = 0; l < oldLessonList.length; l++){
        var day = oldLessonList[l].day;
        var t = parseInt(oldLessonList[l].time.start);
        var end = parseInt(oldLessonList[l].time.end);
        
        while (t < end){
            var t_str = t.toString();
            if (t < 1000){
                var t_str = "0" + t_str;
            }
            delete full_timetable[day][t_str][code];

            if (t_str.endsWith("30")){
                t = t + 70;
            } else {
                t = t + 30;
            }
        }
        
    }
}

function addIndex (code, indexObj){
    var newLessonList = indexObj.lesson;
    for (var l = 0; l < newLessonList.length; l++){
        var day = newLessonList[l].day;
        var t = parseInt(newLessonList[l].time.start);
        var end = parseInt(newLessonList[l].time.end);
        
        while (t < end){
            var t_str = t.toString();
            if (t < 1000){
                var t_str = "0" + t_str;
            }
            full_timetable[day][t_str][code] = [newLessonList[l].type,
                                                newLessonList[l].weekList] ;

            if (t_str.endsWith("30")){
                t = t + 70;
            } else {
                t = t + 30;
            }
        }
    }
}
    

// 1. Select an index for each course such that there are 
// no more than 2 courses at each time slot
// Brute Force
function step1() {
    var result_array = {
        "0" : [],
        "2" : [],
        "3" : [],
        "4" : []
    }
    // Initialize DFS searching progress and clashes after each course is added
    var progress = [];
    var clash_array = []; // store the course codes involved in clashes
    for (var c = 0; c < courseArray.length; c++){
        progress[c] = -1;
    }
    
    

    // DFS
    for (var c = 0; c < courseArray.length; c++){ // choose course
        var courseObject = courseArray[c];
        console.log(courseObject.courseCode);
        var accept = false;
        // remove old index from timetable
        if (progress[c] != -1){ // remove old index
            removeIndex(courseObject.courseCode, courseObject.index[progress[c]]);
        }
        for (var i = progress[c] + 1; i < courseObject.index.length; i++){ // choose index
            console.log(courseObject.index[i].index_number);
            // reset clash array for this course
            if (c == 0){
                clash_array[c] = []; 
            } else {
                clash_array[c] = [...clash_array[c-1]];
                console.log(clash_array[c]);
            }
            accept = false;
            var indexObject = courseObject.index[i];
            var condition = checkClash(indexObject);
            console.log(condition);
            if (Array.isArray(condition)){ // Acceptable
                if (condition.length > 0){ // clash 
                    for (var ci = 0; ci < condition.length; ci ++){
                        if (!clash_array[c].includes(condition[ci])){
                            clash_array[c].push(condition[ci]);
                        }
                    }
                    clash_array[c].push(courseObject.courseCode);
                    console.log(clash_array);
                    if (clash_array[c].length > 4){ // At most 4 courses are allowed in clashes; New course is not counted in num_clashCourses
                        continue; // next index
                    } 
                }
                // found an index
                progress[c] = i;
                if (c == courseArray.length - 1){ // Last course
                    var num_clashCourses = clash_array[c].length;
                    result_array[num_clashCourses].push([...progress]); // Record an index set
                    console.log(progress);
                    continue;
                }
                addIndex(courseObject.courseCode, indexObject);
                console.log(" added");
                accept = true;
                break;
            } 
            // unacceptable clash -> continue
        }
        if (!accept) { // All indexes of the course fail here / All indexes have been tested
            if (c == courseArray.length - 1){ // Last course
                progress[c] = -1; // Reset progress for this course
            } else {
                if (progress[c] != -1){ // remove old index
                    removeIndex(courseObject.courseCode, courseObject.index[progress[c]]);
                }
                progress[c] = -1;
            }
            
            if (c == 0){ // All combinations have been tested 
                break;
            }
            c = c - 2; // Go to the last course
        } 
    }
    return result_array;
    
}


// 2. Change indexes at clash slots to make every clash acceptable



//for (var c = 0; c < courseArray.length; c++):


// Test
document.write("testing\n");
console.log(step1());
// This script can run on its own