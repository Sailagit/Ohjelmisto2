"use strict"; {

const numerot = [];

for (let i = 0; i < 5; i++) {
    const numero = Number(prompt("Anna numero."));
    numerot.push(numero);
    }

    if (numerot.length === 5) {

    let taulukko = "<ul>";

    for (let i = numerot.length - 1; i >= 0; i--){
            taulukko += "<li>" + numerot[i] + "</li>"
        }
        
        taulukko += "</ul>"
        document.getElementById("tulos").innerHTML = taulukko;
        console.log(numerot[numerot.length - 1],
                    numerot[numerot.length - 2],
                    numerot[numerot.length - 3],
                    numerot[numerot.length - 4],
                    numerot[numerot.length - 5]);
    }
}