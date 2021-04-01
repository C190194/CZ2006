const { models } = require("mongoose");
const CourseModal= require("../models/course.js");
const ics = require('ics');
const ics = require('./dist');
//const date2 = new Date('1995-12-17T03:24:00');
//all starting week dates

const week1 = new Date('2021-01-11T00:00:00');
const week2 = new Date('2021-01-18T00:00:00');
const week3 = new Date('2021-01-25T00:00:00');
const week4 = new Date('2021-02-01T00:00:00');
const week5 = new Date('2021-02-08T00:00:00');
const week6 = new Date('2021-02-15T00:00:00');
const week7 = new Date('2021-02-22T00:00:00');
const week8 = new Date('2021-03-08T00:00:00');
const week9 = new Date('2021-03-15T00:00:00');
const week10 = new Date('2021-03-22T00:00:00');
const week11 = new Date('2021-03-29T00:00:00');
const week12 = new Date('2021-04-05T00:00:00');
const week13 = new Date('2021-04-12T00:00:00');

const weekDates = [week1, week2, week3, week4, week5,week6,week7,week8,week9,week10,week11,week12,week13];
const Day ={"MON":0, "TUE":1, "WED":2,"THU":3,"FRI":4,"SAT":5};

var events=[];
var event={title: '', description: '', start: [], end:[]};

// title: 'Dinner',
//   description: 'Nightly thing I do',
//   busyStatus: 'FREE',
//   start: [2018, 1, 15, 6, 30],
//   duration: { minutes: 50 }

function createICS(courses,freeTime)
{
    const eventsAdd= editEvents(courses,freeTime);
    const { error, value } = ics.createEvents(eventsAdd);
      if (error) {
        console.log(error);
        return;
      }
      return value;
}

function editEvents(courses,freeTime)
{
    for (var course in courses)
    {
        for(var lesson in course["index"]["lesson"])
        {

            for(var j =0;j<lesson.weekList.length;j++)
            {
                if(weeklist[j]==1)
                {
                    var eventObj = event;
                    var weekStart = weekDates[j];
                    //var weekDay = (getDaysDiff(weekDates(j),startDate))%7;
                    eventObj['title']=course.courseCode+" "+lesson.type;
                    eventObj['description']=lesson["group"]+" "+lesson["location"];
                    var eventDate = addDays(weekStart,Day[lesson.day]);
                    eventObj['start']=[eventDate.getFullYear(),eventDate.getMonth(),eventDate.getDate(),parseInt(lesson.start.substr(0,2)),parseInt(lesson.start.substr(2,2))];
                    eventObj['end']= [eventDate.getFullYear(),eventDate.getMonth(),eventDate.getDate(),parseInt(lesson.end.substr(0,2)),parseInt(lesson.end.substr(2,2))];

                }
                events.push(eventObj);
            
            }
        }

    }
    if(freeTime[0].length>0)
    {
        for(var j=0;j<13;j++)
        {
            var weekStart = weekDates[j];
            for(var slot in freeTime)
            {
                eventObj['title']="Blocked";
                eventObj['description']="Busy";
                var eventDate = addDays(weekStart,slot[0].getDay()-1);
                eventObj['start']=[eventDate.getFullYear(),eventDate.getMonth(),eventDate.getDate(),slot[0].getHours(),slot[0].getMinutes()];
                eventObj['end']= [eventDate.getFullYear(),eventDate.getMonth(),eventDate.getDate(),slot[1].getHours(),slot[1].getMinutes()];
                events.push(eventObj);
                
            }
        }
    }
    return events;
}


function getDaysDiff(date1, date2)
{
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}

function addDays(date, days)
{
    
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
      
}