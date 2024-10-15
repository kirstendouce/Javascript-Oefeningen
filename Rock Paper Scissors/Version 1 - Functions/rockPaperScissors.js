const prompt = require("prompt-sync")();

let person = prompt("Please type 'rock', 'paper' or 'scissors'. ");
while (person !== "rock" && person !== "paper" && person !== "scissors") {
    person = prompt("Please type 'rock', 'paper' or 'scissors'. ");
}

let computer = pickComputerMove();
console.log("You: " + person + " - Computer: " + computer);
console.log(decideWinner(computer, person));


function pickComputerMove() {
    let getal = Math.random();
    if (getal < 1 / 3) {
        return "rock";
    } else if (getal > 2 / 3) {
        return "scissors";
    } else {
        return "paper";
    }
}

function decideWinner(computer, person) {
    if (person == computer) {
        return "Draw";
    } else if ((person == "rock" && computer == "scissors") || (person == "scissors" && computer == "paper") || (person == "paper" && computer == "rock")) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}