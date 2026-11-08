"use strict"; {

const numerot = [];

    while (true) {
        const numero = Number(prompt("Anna numero."));

        if (numero === 0){
            break;
        }  else {
            numerot.push(numero);
        }

    }

    numerot.sort((a,b) => b-a);

    let taulukko = "<ul>";

    for(let i = 0; i < numerot.length; i++){
            taulukko += "<li>" + numerot[i] + "</li>"
        }
        
        taulukko += "</ul>"
        document.getElementById("tulos").innerHTML = taulukko;
        console.log(numerot);
}