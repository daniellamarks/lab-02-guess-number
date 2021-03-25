// export function compareNumbers(guess, correctNumber) {
//     if (guess === correctNumber) return `You're spot on!`;
//     if (guess > correctNumber) return `You're number is too high, guess again.`;
//     if (guess < correctNumber) return `You're number is too low, guess again.`;
// }

export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return 0;
    if (guess > correctNumber) return 1;
    if (guess < correctNumber) return -1;
}
