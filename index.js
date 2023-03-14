// here is the function that get the computer choice using math random and switch statements
function getComputerChoice (){
   //creating random number 0-2 and creating a variable to hold the computer choice with in the switch statement 
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
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
    // just testing to make sure the code works as expected 
    console.log(computerChoice);
}

// running the function 
getComputerChoice();