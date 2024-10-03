const prompt = require("prompt-sync")();
let tekst = String(prompt("Voer een tekstje in. "));
let tekstOmgekeerd = String("");
for(let i = tekst.length-1; i >= 0; i--){
    tekstOmgekeerd += tekst[i];
}
console.log(tekstOmgekeerd);