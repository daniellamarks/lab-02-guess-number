## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


dev
Create an app that allows the user four guesses to find a number between 1 and 20 inclusive (including "1" and "20"). After each incorrect guess, tell them whether their guess was "too high" or "too low". If they guess correct, or use up all their guesses, disable further input and display an end lose or win message.
## HTML Setup
1) Instructions
2) Input
3) Button
    -Why? On click, the computer to grabs the user input and compares it to the computer's generated random number
    - Counts down how many guesses are left. 
4) Div with results
    -Why? to give feedback to the user on whether their number is correct, too low, or too high. Also displays how many guesses are left. 
    -how? text content.


## Initialize State

1) create a function to generate a number Math.ceil(Math.random() * 10) (const)
2) store all DOM elements into variables (const)

3)2) let triesRemaining = 5

## Events
1) What happens when the user clicks guess?
    - we need to turn the string into a number
    - We compare input to math.random number (actual number), decide whether it is the same, or too low/too low
        - if input is > math.random or input is < math.random, 
            - display too high/too low and guess again, 
            - decrement tries remaining
                -if there are no tries remaining, 
                    -display lose message
                    -disable game play
                -if there are tries remaining, loop back to beginnnig and allow click to guess again
        - if input = math.random, display you win and end game
      

generate random number using math random
user has 4 chances
test each guess against random number
will keep track of if input is too high or too low
after 5 guesses you lose

create variable to 

