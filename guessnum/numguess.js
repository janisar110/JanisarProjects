#! /usr/bin/env node
import inquirer from 'inquirer';
import { easy } from "./easy.js";
import { medium } from './medium.js';
import { hard } from './hard.js';
import chalk from "chalk";
import showBanner from 'node-banner';
(async () => {
    await showBanner('Guessing Game', "Guess the number", "yellow");
})();
async function GuessingGame() {
    const selectLevel = await inquirer.prompt([{
            message: "Select game level: ",
            type: "list",
            name: "level",
            choices: ["Easy", "Medium", "Hard"]
        }]);
    let points = 0;
    let continueWin = true;
    while (continueWin) {
        if (selectLevel.level === "Easy") {
            const guessNum = await inquirer.prompt([{
                    message: "Guess the number(1 to 3): ",
                    type: "number",
                    name: "number1"
                }]);
            let easyNum = easy();
            if (guessNum.number1 === easyNum) {
                points += 10;
                console.log(chalk.green(`Right! you Earned ${points} points`));
            }
            else {
                console.log(chalk.red(`Wrong try again!`));
                continueWin = false;
            }
        }
        else if (selectLevel.level === "Medium") {
            const guessNum = await inquirer.prompt([{
                    message: "Guess the number(1 to 5): ",
                    type: "number",
                    name: "number1"
                }]);
            let mediumNum = medium();
            if (guessNum.number1 === mediumNum) {
                points += 10;
                console.log(chalk.green(`Right! you Earned ${points} points`));
            }
            else {
                console.log(chalk.red(`Wrong try again!`));
                continueWin = false;
            }
        }
        else if (selectLevel.level === "Hard") {
            const guessNum = await inquirer.prompt([{
                    message: "Guess the number(1 to 10): ",
                    type: "number",
                    name: "number1"
                }]);
            let hardNum = hard();
            if (guessNum.number1 === hardNum) {
                points += 10;
                console.log(chalk.green(`Right! you Earned ${points} points`));
            }
            else {
                console.log(chalk.red(`Wrong try again!`));
                continueWin = false;
            }
        }
        else {
            console.log(chalk.red(`Something went wrong try again`));
        }
    }
    console.log(chalk.yellow(`your total score is ${points}`));
}
setTimeout(() => {
    GuessingGame();
}, 1000);
