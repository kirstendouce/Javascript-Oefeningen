const prompt = require("prompt-sync")();
let score1 = Number(prompt("Wat is score 1?"));
let score2 = Number(prompt("Wat is score 2?"));
if (score1 > 50 && score2 > 50) {
    console.log("Beide scores zijn goed.");
} else if(score1 > 50 || score2 > 50){
    console.log("Een score is goed.");
} else {
    console.log("Beide scores zijn slecht.");
}