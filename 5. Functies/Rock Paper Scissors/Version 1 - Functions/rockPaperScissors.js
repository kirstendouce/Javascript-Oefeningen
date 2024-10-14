const prompt = require("prompt-sync")();
function pickComputerMove() {
    let getal = Math.random();
    if(getal < 1/3) {
        return "Rock";
    } else if(getal > 2/3){
        return "Scissors";
    } else {
        return "Paper";
    } 
}

function decideWinner() {
    if(persoon == computer) {
        return "draw";
    } else if((persoon == "rock" && computer == "scissors") || ()){

    }
}
let persoon = prompt("Please type 'rock', 'paper' or 'scissors'. ");
let computer = pickComputerMove();
