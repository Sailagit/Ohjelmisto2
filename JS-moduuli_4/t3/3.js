'use strict';

const ul = document.querySelector("#target")

const names = ["John", "Paul", "Jones"];

for (let name of names) {
    ul.innerHTML += `<li>${name}</li>`; }