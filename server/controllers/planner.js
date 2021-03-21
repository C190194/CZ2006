const CourseModal= require("../models/course.js");

function check_clash(courseCode, index, temp_timetable)
{
    var lesson = index.lesson;
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
                    if(temp_timetable[day][start][courseCode][1][k]==weeks[k])
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

