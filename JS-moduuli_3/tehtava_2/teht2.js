
"use strict";

const osallistujat = [];

// 1. Kysy osallistujien lukumäärä
const osallistujamaara = Number(prompt("Kuinka monta osallistujaa?"));

// 2. Kysy osallistujien nimet
for (let i = 0; i < osallistujamaara; i++) {
    const nimi = prompt("Anna osallistujan nimi:");
    osallistujat.push(nimi);
}

// 3. Järjestä nimet aakkosjärjestykseen
osallistujat.sort((a, b) => a.localeCompare(b, "fi"));

// 4. Muodosta numeroitu lista
let taulukko = "<ol>";

for (let i = 0; i < osallistujat.length; i++) {
    taulukko += "<li>" + osallistujat[i] + "</li>";
}

taulukko += "</ol>";

// 5. Tulosta lista verkkosivulle
document.getElementById("tulos").innerHTML = taulukko;
