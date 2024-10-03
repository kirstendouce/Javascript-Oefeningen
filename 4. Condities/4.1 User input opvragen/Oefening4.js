const prompt = require("prompt-sync")();
let maand = Number(prompt("Wat is de maand? (numeriek) "));
let jaar = Number(prompt("Wat is het jaar? "));
if ((jaar % 4 == 0) && (jaar % 100 != 0) || (jaar % 400 == 0)){
    if(maand == 1) {
        console.log("Februari in een schrikkeljaar.");
    }
    else {
        console.log("Geen februari.");
    }
} else if(maand == 1) {
    console.log("Februari in een normaal jaar.");
} else {
    console.log("Geen februari.");
}