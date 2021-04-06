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

if (!user.name2) {
  console.log("yes");
}
