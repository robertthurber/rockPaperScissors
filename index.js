// the function will play a round of rock paper scissor. It reads from getComputerChoice function and playerChoice variable 
function playRound(playerSelection, computerSelection){
    // turning the results to lower case so it doesn't matter what someone enters or if anything somehow would get jacked up.
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // logic for the game itself 
    if (playerSelection === "rock" && computerSelection === "paper"){
        console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}: you loss :( `)
    }else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}: you Win :) `)
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}: you Win :) `)
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}: you loss :( `)
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}: you loss :( `)
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}: you Win :) `)   
    }else{
        console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}: you tie :/ `)
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

//calling the function playRound with inputs from playerChoice value and the getComputerChoice function. 
playRound(playerChoice, getComputerChoice());

