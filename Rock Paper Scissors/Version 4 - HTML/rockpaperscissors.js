let score = {
	wins: 0,
    losses: 0,
    ties: 0
};

let scoreJson = localStorage.getItem("score");
if (scoreJson) {
    score = JSON.parse(scoreJson);
}

updateJsScore();

//Usermove
function play(userMove) {
    let computerMove = pickComputerMove();
    let result = decideWinner(userMove, computerMove);
    updateJsMovesChosen(userMove, computerMove);
    updateJsResult(result);
    updateJsScore(result);
    saveScore();
}

// Computermove
function pickComputerMove() {
    const rand = Math.random();
    let computerMove = '';

    if (rand >= 0 && rand < 1/3) {
        computerMove = 'rock';
    } else if (rand < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}

//Winner decide
function decideWinner(userMove, computerMove) {
    let result;
    switch (userMove) {
        case 'rock':
            if (computerMove === 'rock') {
                result = 'draw';
            } else if (computerMove === 'paper') {
                result = 'lose';
            } else {
                result = 'win';
            }
            break;
        case 'paper':
            if (computerMove === 'rock') {
                result = 'win';
            } else if (computerMove === 'paper') {
                result = 'draw';
            } else {
                result = 'lose';
            }
            break;
        case 'scissors':
            if (computerMove === 'rock') {
                result = 'lose';
            } else if (computerMove === 'paper') {
                result = 'win';
            } else {
                result = 'draw';
            }
            break;
    }
    resultObject(result);
    return result;
}

//Result
function resultObject(result) {
    if(result === 'win') {
        score.wins ++;
    } else if(result === 'lose') {
        score.losses ++;
    } else if(result === 'draw'){
        score.ties ++;
    }
}

//Reset button
function reset() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateJsScore();
}

//update html moves
function updateJsMovesChosen(userMove, computerMove) {
    let para = document.querySelector('.js-moves-chosen');
    para.innerHTML = `You ${userMove} - ${computerMove} Computer`;
}

//update result
function updateJsResult(result) {
    let para = document.querySelector('.result-js-result');
    if(result === 'draw') {
        para.innerHTML =  `It's a ${result}!`;
    } else {
        para.innerHTML = `You ${result}!`;
    }
}

//update score
function updateJsScore() {
    let para = document.querySelector('.score-js-score')
    para.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//save score
function saveScore() {
    let scoreJSON = JSON.stringify(score);
    localStorage.setItem("score", scoreJSON);
}