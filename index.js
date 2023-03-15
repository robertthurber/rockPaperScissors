// this is the game method that will automatically run the game five times. next step is to get player input to play 
function game(){
   
    // declaring variables to hold how many times either you or the computer won 
    let playerWin = 0;
    let computerWin = 0;
   
    // for loop so we can play the best out of 5 games little wonky it plays 5 games and the person with the most points wins could be 1 to 0 if the 4 other games are ties. need to change to while loop to check until a player as won three games thats a later problem though
    for (let i = 0; i < 5; i++){
       
        // asking for user to enter there answer to play the game 5 times 
        let playerChoice = prompt("Enter Rock, Paper, or scissors!");
       
        // calling the playRound function to determine winner and logging each game 
        let gamePlayed = playRound(playerChoice, getComputerChoice());
        console.log(gamePlayed);
        
        // adds a point to the player if they win or computer if they win 
        if (gamePlayed.includes("Win")){
            playerWin += 1;
            console.log(playerWin);
        }else if(gamePlayed.includes("loss")){
            computerWin += 1;
            console.log(computerWin);
        }
    }
    
    //This for now will give an alert to the screen letting the user know who won! 
    if (playerWin > computerWin){
        alert(`You have beaten the computer ${playerWin} to ${computerWin}!!! SUCK it AI`);
    }else if (playerWin < computerWin){
        alert(`You have lost to the computer ${computerWin} to ${playerWin} AI will be your forever master`);
    }else {
        alert(`You and the computer have tied looks like another Musk and Bazos rivalry`);
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

// AND all the way down her is how the game actually runs by calling the little old game function. 
game();