// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('function should return 0 if input and random number are the same', (expect) => {
    
    const expected = 0;
    const theSame = compareNumbers(1, 1);
    expect.equal(expected, theSame, 'the guess is correct');
});

test('function should return 1 if the input is higher than random number', (expect) => {

    const expected = 1;
    const tooHigh = compareNumbers(2, 1);
    expect.equal(expected, tooHigh, 'number too high');
});

test('function should return -1 if input is smaller than random number', (expect) => {

    const expected = -1;
    const tooLow = compareNumbers(1, 2);
    expect.equal(expected, tooLow, 'number is too low');
});


