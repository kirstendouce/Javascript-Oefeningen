const prompt = require("prompt-sync")();
let cijfer = Number(prompt("Voer een cijfer in tussen 1 en 3. "));
switch (cijfer) {
    case 1: 
        console.log("Een");
        break;
    case 2: 
        console.log("Twee");
        break;
    case 3:
        console.log("Drie");
        break;
}
