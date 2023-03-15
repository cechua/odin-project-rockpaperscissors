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
    let tieResult = 'tie';
    let loseResult = 'lose';
    let winResult = 'win'

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



function game(playerChoice) {
    //alert(playerChoice)
    let playerScore = document.getElementById('playerScore')
    //alert(playerScore.innerHTML)
    let computerScore = document.getElementById('computerScore')
    //alert(computerScore.innerHTML)
    let result = document.getElementById('result')
    
    let roundResult = playRound(playerChoice,getComputerChoice())
    if(roundResult == 'win')
    {
        var score = Number(playerScore.innerHTML) + 1
        playerScore.innerHTML = score;
        if(score < 5) {
            result.innerHTML = "You win!"
        }
        else 
            result.innerHTML = "Player Wins!"
    }
    else if(roundResult == 'lose')
    {
        var score = Number(computerScore.innerHTML) + 1
        computerScore.innerHTML = score;
        if(score < 5) {
            result.innerHTML = "You lose!"
        }
        else 
            result.innerHTML = "Computer Wins!"
    }
    else {
        result.innerHTML = "Tie"
    }

    
    /*for (let i = 0;i <5; i++) {
        console.log('Round: ' + (i + 1).toString())
        let playerChoice = prompt("Rock, Paper or Scissors").toLowerCase()
        console.log(playRound(playerChoice,getComputerChoice()))
    }*/
}