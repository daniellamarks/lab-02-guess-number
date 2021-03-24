// import functions and grab DOM elements

import { compareNumbers } from './utils.js';

const input = document.getElementById('user-input');
const button = document.getElementById('guess-button');
let guessOutput = document.getElementById('guess-output');

const correctNumber = Math.floor((Math.random() * 20) + 1);
console.log(correctNumber);

let triesRemaining = 5;

console.log(triesRemaining)

button.addEventListener('click', () => {

    console.log('button clicked');
    const inputAsNumber = Number(input.value);
    //valueAsNumber
    console.log(inputAsNumber);

    console.log(compareNumbers(inputAsNumber, correctNumber));

    


});


// set event listeners to update state and DOM