// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rpsInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Rock Paper Scissors!")

// the function that will be called by the unit test below

function logic(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log('This was a draw');
    console.log("If you want to settle this, rerun 'node main.js'");
    return;
  }
  else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log('Congratulations, you won!');
    console.log("Wanna play again? Rerun 'node main.js'");

    return;
  } else {
    console.log('Nice try but I WIN sucker');
    console.log("Wanna give another shot? Rerun 'node main.js'");
    return;
  }
}; 

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + Cre

rpsInterface.question('Pick a hand: ', (userInput) => {
  const userChoice = userInput.toLowerCase();
  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    console.log("invalid input provided, has to be rock, paper, or scissors");
    console.log("Rerun 'node main.js' and try again");
    rpsInterface.close();
    return;
  }

  const possibleChoices = ["rock", "paper", "scissors"];

  const computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];


  console.log(`You picked: ${userChoice}`);
  console.log(`I picked: ${computerChoice}`);

  logic(userChoice, computerChoice);

  rpsInterface.close();


});
