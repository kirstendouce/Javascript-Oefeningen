const prompt = require("prompt-sync")();
let tekst = prompt("Voer een tekst in. ");
const scheldwoord = prompt("Voer een scheldwoord in. ");
let newwoord = "";
if (tekst.includes(scheldwoord)) {
    console.log("Dit is ongepaste en niet professioneel. Schaam je!");
    for (let i = 0; i < scheldwoord.length; i++) {
            newwoord += "*";
        }
    while (tekst.includes(scheldwoord)) {
        tekst = tekst.replace(scheldwoord, newwoord);
    }
    console.log(tekst)
} else {
    console.log("Dit is gepast.")
}
