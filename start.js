/* -------------------------------------------------------------------------- */
/*                         retrieve  passed arguments                         */
/* -------------------------------------------------------------------------- */
const myArgs = process.argv.slice(2);

/* -------------------------------------------------------------------------- */
/*                             check the arguments                            */
/* -------------------------------------------------------------------------- */
if (
  !Number.isInteger(Number.parseInt(myArgs[0])) ||
  myArgs.length > 1 ||
  myArgs[0] <= 0
) {
  console.log("Usage: node start.js");
}

/* -------------------------------------------------------------------------- */
/*                            initialize variables                            */
/* -------------------------------------------------------------------------- */
var index = Number.parseInt(myArgs[0]);
var index_x = index * 3 - 1;

var stars = new Array();
var Dessin = "";

/* -------------------------------------------------------------------------- */
/*                            begin model building                            */
/* -------------------------------------------------------------------------- */
stars.push({ motif: " ", nb: index * 3 - 1, separator: "" });
stars.push({ motif: "*", nb: 1, separator: "\n" });

var y_part1 = 1;
for (let x = index_x; x > index * 2; x--) {
  stars.push({ motif: " ", nb: x - 1, separator: "" });
  stars.push({ motif: "*", nb: 1, separator: "" });
  stars.push({ motif: " ", nb: (y_part1 = y_part1 + 2) - 1, separator: "" });
  stars.push({ motif: "*", nb: 1, separator: "\n" });
}
stars.push({ motif: "*", nb: index * 2, separator: "" });
stars.push({ motif: " ", nb: index * 2, separator: "" });
stars.push({ motif: "*", nb: index * 2, separator: "\n" });

var y_part2 = index * 6 - 1;
for (let x = 1; x < index; x++) {
  stars.push({ motif: " ", nb: x, separator: "" });
  stars.push({ motif: "*", nb: 1, separator: "" });
  stars.push({ motif: " ", nb: (y_part2 = y_part2 - 1) - x, separator: "" });
  stars.push({ motif: "*", nb: 1, separator: "\n" });
}
var y_part3 = index * 5 - 1;
for (let x = index; x > 1; x--) {
  stars.push({ motif: " ", nb: x, separator: "" });
  stars.push({ motif: "*", nb: 1, separator: "" });
  stars.push({ motif: " ", nb: (y_part3 = y_part3 + 1) - x, separator: "" });
  stars.push({ motif: "*", nb: 1, separator: "\n" });
}
stars.push({ motif: "*", nb: index * 2, separator: "" });
stars.push({ motif: " ", nb: index * 2, separator: "" });
stars.push({ motif: "*", nb: index * 2, separator: "\n" });

var y_part4 = index * 2 - 1;
var y_part5 = index * 2 - 1;
for (let x = 1; x < index; x++) {
  stars.push({ motif: " ", nb: (y_part4 = y_part4 + 1), separator: "" });
  stars.push({ motif: "*", nb: 1, separator: "" });
  stars.push({ motif: " ", nb: (y_part5 = y_part5 - 1) - x, separator: "" });
  stars.push({ motif: "*", nb: 1, separator: "\n" });
}
// line n
stars.push({ motif: " ", nb: index * 3 - 1, separator: "" });
stars.push({ motif: "*", nb: 1, separator: "" });

/* -------------------------------------------------------------------------- */
/*                                 show model                                 */
/* -------------------------------------------------------------------------- */
var i = 0;
while (stars[i]) {
  Dessin += `${stars[i].motif.repeat(stars[i].nb) + stars[i].separator}`;
  i++;
}
console.log(Dessin);

// }
//
