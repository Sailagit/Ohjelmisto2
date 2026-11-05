function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

"use strict";
const nimi = prompt("Anna nimesi.");

let number = getRandomIntInclusive(1, 4);
if (number == 1) {
   document.querySelector("#target1").innerHTML =
        "Hei " + nimi + ", sinä kuulut Rohkelikkoon!";
}
 else if (number == 2) {
   document.querySelector("#target1").innerHTML =
        "Hei " + nimi + ", sinä kuulut Luihuisiin!";
}
 else if (number == 3) {
   document.querySelector("#target1").innerHTML =
        "Hei " + nimi + ", sinä kuulut Korpinkynteen!";
}
 else if (number == 4) {
     document.querySelector("#target1").innerHTML =
        "Hei " + nimi + ", sinä kuulut Puuskupuhiin!";
 }

 //document.querySelector("#target1").innerHTML =
        //"Hei" + nimi + ", sinä kuulut" + number + "!";