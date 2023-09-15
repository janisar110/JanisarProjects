#! /usr/bin/env node

import inquirer from 'inquirer';
import {easy} from "./easy.js"
import { medium } from './medium.js';
import { hard } from './hard.js';
import { promises } from 'stream';
import chalk from "chalk";
import showBanner from 'node-banner';

(async () => {
    await showBanner("Guessing Game","Guess the number","red");
})();



async function GuessingGame() {
   
    let continueGame = true;

    while(continueGame){

const selectLevel:{level:string} = await inquirer.prompt([{
    message: "Select game level: ",
    type: "list",
    name: "level",
    choices:["Easy","Medium","Hard"]
}]);


let points = 0;
let continueWin = true;

while(continueWin)
{
if(selectLevel.level === "Easy"){
    const guessNum:{number1:number} = await inquirer.prompt([{
        message: "Guess the number(1 to 3): ",
        type: "number",
        name: "number1"
    }]);
    let easyNum = easy();
    if(guessNum.number1 === easyNum){
        points += 10;
        console.log(chalk.green(`Right! you Earned ${points} points`)); 
    } 
    else
    { 
         console.log(chalk.red(`Wrong try again!`))
         continueWin = false;
}  
}

else if(selectLevel.level === "Medium"){
    const guessNum:{number1:number} = await inquirer.prompt([{
        message: "Guess the number(1 to 5): ",
        type: "number",
        name: "number1"
    }]);
    let mediumNum = medium()
    if(guessNum.number1 === mediumNum){
        points += 10;
        console.log(chalk.green(`Right! you Earned ${points} points`))
       
    }
    else
    { console.log(chalk.red(`Wrong try again!`))
    continueWin = false;
}
}
else if(selectLevel.level === "Hard"){
    const guessNum:{number1:number} = await inquirer.prompt([{
        message: "Guess the number(1 to 10): ",
        type: "number",
        name: "number1"
    }]);
    let hardNum = hard()
    if(guessNum.number1 === hardNum){
        points += 10;
        console.log( chalk.green(`Right! you Earned ${points} points`))
    }
    else {
        console.log(chalk.red(`Wrong try again!`))
        continueWin = false;
    }
    
}
else{
    console.log(chalk.red(`Something went wrong try again`))
}
}
console.log(chalk.yellow(`your total score is ${points}`));




let conGame:{contgame:string} = await inquirer.prompt({
    message: "if you want to continue press (y/n): ",
    type: 'input',
    name: "contgame"
})




if(conGame.contgame === "y" || conGame.contgame === "Y"){
    continueGame = true;
}
else continueGame = false

}



}
setTimeout(() => {
    GuessingGame()
}, 500);