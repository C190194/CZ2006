'use strict';
const fs = require('fs');
//const courses=require('./2020_courseDetails');
const editJsonFile = require("edit-json-file");
let file = editJsonFile(`2020_2_data.json`);
var obj={};
var course=[];
for(var k in file.get()){ //file.get()[k]["courseCode"]=k; 
obj["courseCode"] = k;
obj["courseDetails"] = file.get()[k]; 
course.push(obj);
//console.log(obj);
}
//file.save();
console.log(course);
// fs.writeFileSync("input.json", JSON.stringify(course,null,4), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );




