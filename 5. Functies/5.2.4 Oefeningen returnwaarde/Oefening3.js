const prompt = require("prompt-sync")();
const start = Number(prompt("Geef een startnummer in. "));
const eind = Number(prompt("Geef een eindnummer in. "));
function berekenSom(start, eind) {
    let som = 0;
    if (start <= eind) {
        for (let i = start; i <= eind; i++) {
            som += i;
        }
    } else {
        for (let i = eind; i <= start; i++) {
            som += i;
        }
    }
    return som;
}
console.log(berekenSom(start, eind));
