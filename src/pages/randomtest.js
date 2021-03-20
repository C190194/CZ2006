// var i;
// var times = 100;
// var t1 = Date.now();
// // for (i = 0; i < times; i++) {
// //   var id = Math.random().toString(36).substr(2, 9);
//new Date().getTime().toString()
// // }
// var t2 = Date.now();
// // var z = t2 - t1;

// console.log(t1);

var i;
var times = 100000;
var t1 = Date.now();
for (i = 0; i < times; i++) {
  var id = new Date().getTime().toString();
}
console.log(Date.now() - t1);
