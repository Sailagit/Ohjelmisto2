const nimet =[];

function nimitaulukko() {
    const nimi = document.getElementById("nimi").value;

    if (nimi.trim() === "") {
        alert("Anna koiran nimi!");
        return nimet;
    }

    nimet.push(nimi);

    document.getElementById("nimi").value = "";

    if (nimet.length === 6) {

        nimet.sort((a, b) => a.localeCompare(b, "fi"));
        nimet.reverse();

        let taulukko = "<ul>";

        for(let i = 0; i < nimet.length; i++){
            taulukko += "<li>" + nimet[i] + "</li>"
        }

        taulukko += "</ul>"
        document.getElementById("tulos").innerHTML = taulukko;
    
    }
}
