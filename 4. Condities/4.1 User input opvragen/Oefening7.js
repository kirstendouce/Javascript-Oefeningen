const prompt = require("prompt-sync")();
let maand = Number(prompt("Voer een getal in dat een maand vertegenwoordigd. (Januari = 1) "));
switch (maand) {
    case 1: 
    case 2: 
    case 12:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Lente");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Zomer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Herfst");
        break;
    default:
        console.log("geen correcte ingevoerde waarde!");
        break;
}