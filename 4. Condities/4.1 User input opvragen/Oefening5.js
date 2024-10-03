const prompt = require("prompt-sync")();
let inkomen = Number(prompt("Geef je inkomen op. "));
let belastingen;
if(inkomen < 10000) {
    belastingen = 0;
} else if(inkomen < 20000){
    belastingen = 10;
} else if(inkomen < 50000){
    belastingen = 20;
} else {
    belastingen = 30;
}
console.log("De belasting: " + belastingen + "% \n" + "Uw netto-inkomen: " + (inkomen - inkomen * (belastingen / 100)) + ".");