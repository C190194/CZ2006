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
const week1 = new Date("2021-01-11T00:00:00Z");
const week2 = new Date("2021-01-18T00:00:00Z");
const week3 = new Date("2021-01-25T00:00:00Z");
const week4 = new Date("2021-02-01T00:00:00Z");
const week5 = new Date("2021-02-08T00:00:00Z");
const week6 = new Date("2021-02-15T00:00:00Z");
const week7 = new Date("2021-02-22T00:00:00Z");
const recess = new Date("2021-03-01T00:00:00Z");
const week8 = new Date("2021-03-08T00:00:00Z");
const week9 = new Date("2021-03-15T00:00:00Z");
const week10 = new Date("2021-03-22T00:00:00Z");
const week11 = new Date("2021-03-29T00:00:00Z");
const week12 = new Date("2021-04-05T00:00:00Z");
const week13 = new Date("2021-04-12T00:00:00Z");
const end = new Date("2021-04-19T00:00:00Z");

const teaching_weeks = [
  week1,
  week2,
  week3,
  week4,
  week5,
  week6,
  week7,
  week8,
  week9,
  week10,
  week11,
  week12,
  week13,
  end,
];

function getWeek() {
  let now = new Date();
  if (recess < now && now < week8) {
    return -1; // Recess week
  } else if (end < now) {
    return 14; // Teaching weeks have ended
  }
  for (let i = 0; i < 13; i++) {
    if (now < teaching_weeks[i]) {
      return i;
      // i = 0 means before week1
    }
  }
}

console.log(getWeek());
