// this is the game method that will automatically run the game five times. next step is to get player input to play 
function game(){
    for (let i = 0; i < 5; i++){
        let gamePlayed = playRound(playerChoice, getComputerChoice());
        console.log(gamePlayed);
    }
}

// the function will play a round of rock paper scissor. It reads from getComputerChoice function and playerChoice variable 
function playRound(playerSelection, computerSelection){
    // turning the results to lower case so it doesn't matter what someone enters or if anything somehow would get jacked up.
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // logic for the game itself 
    if (playerSelection === "rock" && computerSelection === "paper"){
        return `You selected ${playerSelection}, the computer selected ${computerSelection}: you loss :( `;
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        return `You selected ${playerSelection}, the computer selected ${computerSelection}: you Win :) `;
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return `You selected ${playerSelection}, the computer selected ${computerSelection}: you Win :) `;
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return `You selected ${playerSelection}, the computer selected ${computerSelection}: you loss :( `;
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        return `You selected ${playerSelection}, the computer selected ${computerSelection}: you loss :( `;
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return `You selected ${playerSelection}, the computer selected ${computerSelection}: you Win :) `;
    }else{
        return `You selected ${playerSelection}, the computer selected ${computerSelection}: you tie :/ `;
    }
}

// here is the function that get the computer choice using math random and switch statements
function getComputerChoice (){
   //creating random number 0-2 and creating a variable to hold the computer choice with in the switch statement 
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    // switch statement that using random number to determine rock paper or scissors 
    switch(randomNumber){
        case 0:
            computerChoice = "rock"
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors"
            break;
        default:
            console.log("if you are seeing this something went horribly wrong");
    }
    return computerChoice;
}

//this is manual for not 
let playerChoice = "scissors"

//calling the game method
game();