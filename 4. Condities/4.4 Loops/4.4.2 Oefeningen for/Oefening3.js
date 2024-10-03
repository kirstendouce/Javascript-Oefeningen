const prompt = require("prompt-sync")();
const start = Number(prompt("Geef een startgetal in. "));
const einde = Number(prompt("Geef een eindgetal in. "));
for(let i = start; i <= einde; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}