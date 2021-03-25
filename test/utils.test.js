// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('function should take in the user string-turned integer and compare it to randomly generated number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const correct = compareNumbers(1, 1);
    const tooHigh = compareNumbers(5, 2);
    const tooLow = compareNumbers(5, 6);
    
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    // (actual, expect, descriptor)
    expect.equal(correct, 0, 'your guess is correct');
    expect.equal(tooHigh, 1, 'guess is too high');
    expect.equal(tooLow, -1, 'guess is too low');
});


//We will need to know whether the user's guess is correct, too low, or too high.

// TDD a compareNumbers function that:

// Has two parameters: guess and correctNumber
// Returns one of the following values:
// 0 - the numbers are identical
// -1 - the guessed number is too low
// 1 - the guessed number is too high
// Write one test at a time, each test should address one of the three possible outcomes.

// You can assume valid input, meaning the passed input will always be a number.