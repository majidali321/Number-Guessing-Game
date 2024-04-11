#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t WelCome to my Number guessing Game")
const RandomNumber = Math.floor(Math.random() * 6)

const answer = await inquirer.prompt([
    {
        name:"UserGuessedNumber",
        type:"number",
        message:"Enter ur num within 1~6"
    }
]);
if (answer.UserGuessedNumber === RandomNumber){
    console.log("you win")
}else{
    console.log("you loose")
}
