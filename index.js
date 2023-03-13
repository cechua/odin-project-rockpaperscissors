console.log('test')

function getComputerChoice() {
    let randomChoiceNumber = Math.floor(Math.random() * 3)
    console.log(randomChoiceNumber)
    if(randomChoiceNumber == 0)
    {
        return 'scissors'
    }
    else if(randomChoiceNumber == 1)
    {
        return 'rock'
    }
    else if(randomChoiceNumber == 2)
    {
        return 'paper'
    }
}

function playRound(playerSelection, getComputerChoice) {
    let tieResult = 'Tie';
    let loseResult = 'Lose';
    let winResult = 'Win'
    console.log(playerSelection,getComputerChoice)
    if(playerSelection.toLowerCase() == getComputerChoice.toLowerCase())
    {
        return tieResult
    }
    else if((playerSelection.toLowerCase() == 'paper' && getComputerChoice.toLowerCase() == 'scissors') 
    || (playerSelection.toLowerCase() == 'scissors' && getComputerChoice.toLowerCase() == 'rock') || 
    (playerSelection.toLowerCase() == 'rock' && getComputerChoice.toLowerCase() == 'paper'))
    {
        return loseResult
    }
    else {
        return winResult
    }
}



function game() {
    for (let i = 0;i <5; i++) {
        console.log('Round: ' + (i + 1).toString())
        let playerChoice = prompt("Rock, Paper or Scissors").toLowerCase()
        console.log(playRound(playerChoice,getComputerChoice()))
    }
}
game();