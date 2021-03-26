const data = require("./output.json");
let x = 400;
console.log(data.findIndex((item) => item.courseCode.slice(0, 2) === "CZ"));
console.log(data.slice(409, 609));
