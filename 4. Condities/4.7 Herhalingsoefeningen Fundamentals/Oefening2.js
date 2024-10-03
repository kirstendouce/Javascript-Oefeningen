const prompt = require("prompt-sync")();
const ondergrens = Number(prompt("Stel een ondergrens in. "));
const bovengrens = Number(prompt("Stel een bovengrens in. "));
let som= 0;
for(let i = ondergrens; i <= bovengrens; i++) {
    if(i % 3 == 0){
        som += i;
    }
}
console.log(som);