import inquirer from "inquirer";

// 1) Computer will generate a random number.

// 2) User input for guessing number.

// 3) Compare user input with computer generated number and show result.

const randomNumber = Math.floor(Math.random()  * 10 + 1);

console.log("Welcome to our Number Guessing Game. ")

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    }
]);

console.log(answers)

if(answers.userGuessedNumber === randomNumber) {
    console.log("Congrats, you guessed number correctly.")
} else {
    console.log("You guessed wrong number. :( ")
}

