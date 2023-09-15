#! /usr/bin/env node

import inquirer from "inquirer";
import showBanner from 'node-banner';
import { promises } from "stream";
import { amount } from "./amount.js";
import { Cashwithdraw } from "./cashwithdraw.js";
import { sendMoney } from "./sendmoney.js";


(async () => {
    await showBanner("ATM", "wellcome to janisar's ATM")
})();

async function atm() {

    interface UsersDetail {
        userid: number;
        userpin: number
    }


    let userInp: { userid: number, userpin: string } = await inquirer.prompt([{
        message: "Enter your user Id: ",
        name: "userid",
        type: "input"
    },
    {
        message: "Enter your pin: ",
        name: "userpin",
        type: "password"
    }]);


    let AccountBalance = amount();
    let continueAtm = true;
    while (continueAtm) {

        let atmOptions: { atmopt: string } = await inquirer.prompt([{
            message: "Select option: ",
            name: "atmopt",
            type: "list",
            choices: ["Cash withdrawal", "Balance inquiry", "Send money", "exit"]
        }])

        if (atmOptions.atmopt === "Cash withdrawal") {
            let cashwithdraw: { amountwithdraw: number } = await inquirer.prompt({
                message: "Enter widthdrawal Amount: ",
                name: "amountwithdraw",
                type: "number"
            })
            if (cashwithdraw.amountwithdraw < AccountBalance) {

                AccountBalance = Cashwithdraw(AccountBalance, cashwithdraw.amountwithdraw)
                console.log(`remaining balance is: ${AccountBalance}`)
            }
            else console.log(`Insufficient balance! available balance is ${AccountBalance}`)

        }
        else if (atmOptions.atmopt === "Balance inquiry") {
            console.log(`Your account balance is: ${AccountBalance}`)
        }
        else if (atmOptions.atmopt === "Send money") {
            let sendMoneyInp: { accNum: number, sendAmount: number } = await inquirer.prompt([{
                message: "Enter account number: ",
                name: "accNum",
                type: "number"
            },
            {
                message: "Enter Amount to send : ",
                name: "sendAmount",
                type: "number"
            }])
            if (sendMoneyInp.sendAmount < AccountBalance) {
                AccountBalance = sendMoney(AccountBalance, sendMoneyInp.sendAmount, sendMoneyInp.accNum, userInp.userid)
                console.log(`${sendMoneyInp.sendAmount} is Succesfully sended. your remaing amount is ${AccountBalance}`)
            } else console.log(`Insufficient balance! available balance is ${AccountBalance}`)


        }
        else if (atmOptions.atmopt === "exit") {
        }
        else console.log(`Something went wrong please try again`)

        let continueAtmInp: { contAtm: string } = await inquirer.prompt([{
            message: "You want to continue Atm press (y/n): ",
            type: "input",
            name: "contAtm"
        }])


        if (continueAtmInp.contAtm === "y" || continueAtmInp.contAtm === "Y") {
            continueAtm = true;
        }
        else {
            continueAtm = false;
        }




    }
}

setTimeout(() => {
    atm()
}, 1000)