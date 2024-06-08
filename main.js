"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// 1) Computer will generate a random number.
// 2) User input for guessing number.
// 3) Compare user input with computer generated number and show result.
var randomNumber = Math.floor(Math.random() * 10 + 1);
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    }
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congrats, you guessed number correctly.");
}
else {
    console.log("You guessed wrong number. :( ");
}
