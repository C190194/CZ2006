const fs = require('fs')
var obj={}
var courses=[]
fs.readFile('./2020_2_data.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const customer = JSON.parse(jsonString)
        for(var k in customer)
        {
            //console.log("Customer address is:", k)
            obj["courseCode"]=k;
            obj["courseDetails"]=customer[k];
            next();
            courses.push(obj);
            //console.log(obj);
        }
        console.log(courses);
         // => "Customer address is: Infinity Loop Drive"
} catch(err) {
        console.log('Error parsing JSON string:', err)
    }
})