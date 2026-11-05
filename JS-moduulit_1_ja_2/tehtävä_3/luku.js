"use strict";
const number1Str = prompt("Syötä numero.");
const number2Str = prompt("Syötä numero.");
const number3Str = prompt("syötä numero.");
const number1 = parseInt(number1Str);
const number2 = parseInt(number2Str);
const number3 = parseInt(number3Str);
const summa = number1 + number2 + number3;
const tulo = number1 * number2 * number3;
const keskiarvo = summa / 3;
document.querySelector("#target1").innerHTML =
        "Syöttämäsi lukujen summa on: " + summa + "!";
document.querySelector("#target2").innerHTML =
        "Syöttämäsi lukujen tulo on: " + tulo + "!";
document.querySelector("#target3").innerHTML =
        "Syöttämäsi lukujen keskiarvo on: " + keskiarvo + "!";