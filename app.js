// import functions and grab DOM elements

import { compareNumbers } from './utils.js';

const input = document.getElementById('user-input');
const button = document.getElementById('guess-button');
let guessOutput = document.getElementById('guess-output');

const correctNumber = Math.ceil((Math.random() * 20));
console.log(correctNumber)

let triesRemaining = 5;

console.log(triesRemaining)

button.addEventListener('click', () => {

    triesRemaining--;
    console.log(triesRemaining);

    const inputAsNumber = Number(input.value);
    console.log(inputAsNumber, correctNumber);

    const comparison = compareNumbers(inputAsNumber, correctNumber);    
    guessOutput.textContent = `$(comparison);

    if (triesRemaining <= 0) { 
        guessOutput.textContent = "Try again!";
        button.style.display = "none"
    }
});


// set event listeners to update state and DOM