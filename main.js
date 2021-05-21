// Task two
function checkYuGiOh(n) {
  if (isNaN(n)) {
    console.log(`Invalid Parameter: ${n}`);
    return;
  }
  if (n === "") {
    console.log("Invalid Parameter: '' ");
    return;
  }
  for (let i = 1; i <= n; i++) {
    i % 30 == 0
      ? console.log('"' + "Yu-Gi-Oh" + '"')
      : i % 15 == 0
      ? console.log('"' + "Gi-Oh" + '"')
      : i % 10 == 0
      ? console.log('"' + "Yu-Oh" + '"')
      : i % 6 == 0
      ? console.log('"' + "Yu-Gi" + '"')
      : i % 5 == 0
      ? console.log('"' + "Oh" + '"')
      : i % 3 == 0
      ? console.log('"' + "Gi" + '"')
      : i % 2 == 0
      ? console.log('"' + "Yu" + '"')
      : console.log(i);
  }
  return;
}

checkYuGiOh(30);
checkYuGiOh("fizzbuzz is meh");
checkYuGiOh(10);