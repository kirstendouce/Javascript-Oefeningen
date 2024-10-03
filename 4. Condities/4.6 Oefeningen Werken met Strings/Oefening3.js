const prompt = require("prompt-sync")();
let tekst = prompt("Voer een tekst in. ");
tekst = tekst.toLowerCase();
let newtekst = tekst.replace("is", "was");
newtekst = newtekst.substring(0,1).toUpperCase() + newtekst.substring(1, newtekst.length);
console.log(newtekst);