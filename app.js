// import functions and grab DOM elements

import { compareNumbers } from './utils.js';

const input = document.getElementById('user-input');
const button = document.getElementById('guess-button');
let guessOutput = document.getElementById('guess-output');
const resetButton = document.getElementById('reset-button');

const correctNumber = Math.ceil((Math.random() * 20));
console.log(correctNumber)

let triesRemaining = 5;

console.log(triesRemaining)

button.addEventListener('click', () => {

    // triesRemaining--;
    // console.log(triesRemaining);

    const inputAsNumber = Number(input.value);
    // console.log(inputAsNumber, correctNumber);

    const comparison = compareNumbers(inputAsNumber, correctNumber);    

    if (comparison === 0) {
        guessOutput.textContent = `You win!`;
        button.style.display = "none";
        resetButton.classList.remove('hidden');
        resetButton.classList.add('reset');
    } else if (comparison === 1) {
        triesRemaining--;
        guessOutput.textContent = `You're number is too high. You have ${triesRemaining} tries remaining.`;
    } else if (comparison === -1) {
        triesRemaining--;
        guessOutput.textContent = `You're number is too low. You have ${triesRemaining} tries remaining.`;
    }

    if (triesRemaining <= 0) { 
        guessOutput.textContent = "Sorry, you lost!";
        button.style.display = "none";
        resetButton.classList.remove('hidden');
        resetButton.classList.add('reset');
    }

});


// Move UI work into functions for discrete UI updating tasks:

// Decrementing tries
// Display of too low message
// Display of too high message
// Disable game play
// Display of Lose Game
// Display of Win Game

// set event listeners to update state and DOM