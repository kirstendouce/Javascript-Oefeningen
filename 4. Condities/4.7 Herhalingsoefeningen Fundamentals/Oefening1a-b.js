const prompt = require("prompt-sync")();
const lijnen = Number(prompt("Vul het aantal lijnen in."));
for (let i = 1; i <= lijnen; i++) {
    let lijn = "";
    for (let a = lijnen - i; a > 0; a--) {
        lijn += " ";
    }
    for (let b = 0; b < i; b++) {
        lijn += "#";
    }
    console.log(lijn);
}