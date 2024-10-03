const prompt = require("prompt-sync")();
let berekening = 0;
let getal = Number(prompt("Voer een getal in. "));
 while(getal > 0){
    berekening += getal;
    getal = Number(prompt("Voer een getal in. "));
} 
    console.log(berekening);