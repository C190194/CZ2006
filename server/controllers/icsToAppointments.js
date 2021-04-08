// import ical
const ical = require('node-ical');

const week1 = new Date('2021-01-11T00:00:00Z');
const week2 = new Date('2021-01-18T00:00:00Z');
const week3 = new Date('2021-01-25T00:00:00Z');
const week4 = new Date('2021-02-01T00:00:00Z');
const week5 = new Date('2021-02-08T00:00:00Z');
const week6 = new Date('2021-02-15T00:00:00Z');
const week7 = new Date('2021-02-22T00:00:00Z');
const week8 = new Date('2021-03-08T00:00:00Z');
const week9 = new Date('2021-03-15T00:00:00Z');
const week10 = new Date('2021-03-22T00:00:00Z');
const week11 = new Date('2021-03-29T00:00:00Z');
const week12 = new Date('2021-04-05T00:00:00Z');
const week13 = new Date('2021-04-12T00:00:00Z');

const teaching_weeks = [week1, week2, week3, week4, week5, week6, week7, week8, week9, week10, week11, week12, week13];

const GetWeek = require('./getWeek');

// req.body.icsList : array of ics file objects.
// req.body.week : integer representing the current week.
// return [result1, result2] : array result1 holds appointment arrays for ics files in the current week;
//                             array result2 holds appointment arrays for ics files in the next week.
const return_appointments = async(req,res)=>{
    const input_ics_list = [];
    const week = 0;
    input_ics_list = req.body.icsList;
    week = req.body.week;

    let result1 = []; 
    let result2 = [];

    
    if (week == -1){
        for(i = 0; i < input_ics_list.length; i++){
            let appointments = getAppointments(input_ics_list[i], 8);
            result2.push(appointments);
        }
        //result2 = [8, result2];
    } else if (week == 0){
        for(i = 0; i < input_ics_list.length; i++){
            let appointments = getAppointments(input_ics_list[i], 1);
            result2.push(appointments);
        }
        //result2 = [1, result2];
    } else if (week == 13){
        for(i = 0; i < input_ics_list.length; i++){
            let appointments = getAppointments(input_ics_list[i], 13);
            result1.push(appointments);
        }
        //result1 = [13, result1];
    } else if (week != 14){
        for(i = 0; i < input_ics_list.length; i++){
            let appointments = getAppointments(input_ics_list[i], week);
            result1.push(appointments);
        }
        //result1 = [week, result1];
        for(i = 0; i < input_ics_list.length; i++){
            let appointments = getAppointments(input_ics_list[i], week+1);
            result2.push(appointments);
        }
        //result2 = [week+1, result2];
    }

    res.status(200).json([result1,result2]);

}

function getAppointments(ics, thisWeek){
    let appointments = [];
    //let data = ical.sync.parseFile(ics);
    let data = ical.sync.parseICS(ics); // string 
    console.log(data);
    for (const ev of Object.values(data)){
        let event = {};
        //let startDate = new Date(ev.start);
        //console.log(ev.start);
        let startDate = new Date(ev.start);
        //console.log(startDate);
        //startDate=startDate.getDate();
        //console.log(startDate);
        let endDate = new Date(ev.end);
        let week_start = teaching_weeks[thisWeek-1];
        console.log(thisWeek);
        console.log(week_start);
        let week_end = teaching_weeks[thisWeek];
        if (week_start < startDate && startDate < week_end){
            //const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            //console.log(`${ev.summary} is in ${ev.location} on the ${ev.start.getDate()} of ${months[ev.start.getMonth()]} at ${ev.start.toLocaleTimeString('en-GB')}`);
            let summary_tuple = ev.summary.split(" ");
            event["title"] = summary_tuple[0];
            event["type"] = summary_tuple[1];
            //const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
            //event["day"] = `${days[startDate.getUTCDay()]}`;
            event["startDate"] = startDate;
            event["endDate"] = endDate;
            let description_tuple = ev.description.split(" ");
            event["group"] = description_tuple[0];
            event["location"] = description_tuple[1];
            appointments.push(event);
        }
        
    }
    for (let i = 0; i < appointments.length; i++){
        appointments[i]["id"] = i;
    }
    return appointments;
}

module.exports.return_appointments = return_appointments;
