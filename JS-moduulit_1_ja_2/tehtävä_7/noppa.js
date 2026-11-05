function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

"use strict";
const noppien_maaraStr = prompt("Kuinka monta noppaa heitetään?");
const noppien_maara = parseInt(noppien_maaraStr);

let summa = 0;

for (let i = 0; i < noppien_maara; i ++){
    let noppa = getRandomIntInclusive(1, 6);
    summa += noppa }

    document.querySelector("#target1").innerHTML =
        "Heitettyjen noppien silmälukujen summa on: " + summa + "!";
