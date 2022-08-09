// Get the user’s choice.


var getUserChoice = function (userInput) {
    // userInput = userInput.toLowerCase();

    if (userInput === 'rock') {
        console.log(userInput)
    } else if (userInput === 'paper'){
        console.log(userInput)
    } else if (userInput === 'scissors'){
        console.log(userInput)
    } else {
        console.log('Invalid answer. Please choose rock, paper, or scissors.')
    }
}
getUserChoice('rock');

// Get the computer’s choice.

var getComputerChoice = function () {
    const randomNumber = Math.floor(Math.random()* 3)

    if (randomNumber === 0){
       return 'rock';
    } else if (randomNumber === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice());

const compWon = 'Computer won!'
const userWin = 'You win!'

var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice){
        return 'tie';
    } if (userChoice === 'rock') 
        if (computerChoice === 'paper'){
        return compWon;
                } else{
            return userWin;
        }
        if (userChoice === 'paper')
            if (computerChoice === 'scissors'){
            return compWon
                } else{
            return userWin
        }
        if (userChoice === 'scissors')
            if (computerChoice === 'rock'){
                return compWon
                    } else{
                return userWin       
                    }  
    
}


// // Start the program and display the results.

const playGame = function (){

  const  userChoice = getUserChoice;
  const computerChoice = getComputerChoice();
  return determineWinner(userChoice, computerChoice);
}

console.log(playGame());
