const prompt = require("prompt-sync")();
let getal = Number(prompt("Voer een getal in. "));
while(getal >= 0){
    console.log(getal);
    getal--;
}