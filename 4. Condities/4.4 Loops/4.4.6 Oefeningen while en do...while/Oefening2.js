const prompt = require("prompt-sync")();
let getal;
do {
    getal = Number(prompt("Geef een getal in tussen 1 en 10. "));
    console.log(getal);
} while(getal < 11 && getal > 0);