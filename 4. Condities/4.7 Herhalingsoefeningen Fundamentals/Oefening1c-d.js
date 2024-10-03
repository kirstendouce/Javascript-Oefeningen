const prompt = require("prompt-sync")();
const lijnen = Number(prompt("Vul het aantal lijnen in. "));
let interval = Number(prompt("Kies een interval. "));
let aantal = 0;
for (let i = 1; i <= lijnen; i++) {
    let lijn = "";
    for (let a = 0; a <= lijnen - i; a++) {
        lijn += " ";
    }
    for (let b = 0; b < i; b++) {
        if(aantal % interval == 0){
            lijn += "@";
        } else {
            lijn += "#";
        }
        aantal+= 1;
    }
    for(let c = 1; c < i; c++){
        if(aantal % interval == 0){
            lijn += "@";
        } else {
            lijn += "#";
        }
        aantal+= 1;        
    }
    console.log(lijn);
}