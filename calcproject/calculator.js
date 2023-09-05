#! /usr/bin/env node
import { sum } from "./sum.js";
import { subtract } from "./subtract.js";
import { multiplication } from "./multiplication.js";
import { division } from "./division.js";
import inquirer from "inquirer";
let contProject = true;
while (contProject) {
    console.log(`Wellcome to Janisar's Calculator`);
    const Num1 = await inquirer.prompt([{
            message: "Enter first number: ",
            type: "number",
            name: "number1"
        }]);
    const operation = await inquirer.prompt([{
            message: "Enter operation press ( + , - , * , / ): ",
            type: "list",
            name: "operation1",
            choices: ["+", "-", "*", "/"]
        }]);
    const Num2 = await inquirer.prompt([{
            message: "Enter second number: ",
            type: "number",
            name: "number2"
        }]);
    if (operation.operation1 === "+") {
        let result = sum(Num1.number1, Num2.number2);
        console.log(result);
    }
    else if (operation.operation1 === "-") {
        let result1 = subtract(Num1.number1, Num2.number2);
        console.log(result1);
    }
    else if (operation.operation1 === "*") {
        let result2 = multiplication(Num1.number1, Num2.number2);
        console.log(result2);
    }
    else if (operation.operation1 === "/") {
        let result3 = division(Num1.number1, Num2.number2);
        console.log(result3);
    }
    else {
        console.log("Enter correct operation sign ( + , - , * , / )");
    }
    //userinput for exit program or continue
    const contiPro = await inquirer.prompt({
        message: "if you continue calculator (y/n): ",
        type: "input",
        name: "contiproject"
    });
    if (contiPro.contiproject === "y") {
        contProject = true;
    }
    else {
        contProject = false;
    }
}
