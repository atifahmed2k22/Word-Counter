#! /usr/bin/env node
import inquirer from "inquirer";
// Declare a constant 'answer' and assign it to the result of an inquirer.prompt function
const answer = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Please enter a sentence to count the words",
});
const words = answer.Sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word count of the sentence to the console
console.log(`The number of words in this sentence is ${words.length}`);
