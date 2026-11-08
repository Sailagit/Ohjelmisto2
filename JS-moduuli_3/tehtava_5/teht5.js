"use strict"; {

const numerot = [];

    while (true) {
        const numero = Number(prompt("Anna numero."));

        if (numerot.includes(numero)){
            alert("Olet jo syöttänyt tämän numeron.")
            break;
        }  else {
            numerot.push(numero);
        }

    }

    numerot.sort((a,b)=> a-b);

    let taulukko = "<ul>";

    for(let i = 0; i < numerot.length; i++){
            taulukko += "<li>" + numerot[i] + "</li>"
        }
        
        taulukko += "</ul>"
        document.getElementById("tulos").innerHTML = taulukko;
        console.log(numerot);
}