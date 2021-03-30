const ical = require('node-ical');

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


// ics to json 
const ical2json = require("ical2json");
var output = ical2json.convert("C:\Users\aksha\Downloads\ClassSchedule");
console.log(output);

//convert the timetable format to .ics

const directEvents = ical.sync.parseICS(``);
const currentWeek;

function commonFreeTime()
{
    currentWeek=getCurrentWeek();
    var weekStart = weeekDates[currentWeek];
    var weekEnd = weekDates[currentWeek + 1];
    
}


function getCurrentWeek()
{
    const dateNow = new Date.now();
    var diff=getDaysDiff(dateNow,week1);
    var weeks = diff/7;
    if(weeks>7)
    {
        weeks--;
    }
    return weeks;
}

function getDaysDiff(date1, date2)
{
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}


