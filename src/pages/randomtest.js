var paramsString = "?q=344&topic=api&CZ2001=";
var searchParams = new URLSearchParams(paramsString);

//Iterate the search parameters.
const tempCombo = {};
for (let p of searchParams.keys()) {
  // console.log(typeof p[1]);
  console.log(p);
}

// undefined.length;
// console.log(tempCombo);
const arr = [
  [1, 2],
  [3, 4],
];
console.log(arr.map((item) => item.map((item2) => item2 + 1)));
console.log(Date.now().toString());
const user = { name: "liew" };
user.age = 12412;

console.log(user);

const something = null;
if (something) {
  console.log("yes");
} else {
  console.log("no");
}
const week1 = new Date("2021-01-11T00:00:00");

function getCurrentWeek() {
  const dateNow = new Date.now();
  var diff = getDaysDiff(dateNow, week1);
  var weeks = diff / 7;
  if (weeks > 7) {
    weeks--;
  }
  return weeks;
}

function getDaysDiff(date1, date2) {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
