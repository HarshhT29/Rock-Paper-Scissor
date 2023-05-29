// let computerMove = Math.floor(Math.random()*3 +1);
// console.log(computerMove);
let score={wins:0,losses:0,ties:0};

displayScore();

function pickComputerMove(){
    let compMove = Math.floor(Math.random()*3+1);
    let computerMove;
    if(compMove===1){
        computerMove = 'rock';
    }
    else if(compMove===2){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }
    return computerMove;
}

function gameMoves(playerMove){
    const computerMove = pickComputerMove();
    if(playerMove===computerMove){
        document.querySelector('.resultText').innerHTML='TIE';
        score.ties+=1;
    }
    else if((playerMove==='rock' && computerMove==='scissors') || (playerMove==='paper' && computerMove==='rock') || (playerMove==='scissors' && computerMove==='paper')){
        document.querySelector('.resultText').innerHTML='YOU WIN';
        score.wins+=1;
    }
    else{
        document.querySelector('.resultText').innerHTML='YOU LOSS';
        score.losses+=1;
    }
    document.querySelector('.movePlayed').innerHTML=`Player's Move: ${playerMove} <br/> Computer's Move: ${computerMove}`;
    displayScore();
}
function resetScore(){
    score={wins:0,losses:0,ties:0};
    displayScore();
}    

function displayScore(){
    document.querySelector('.scoreBoard').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
