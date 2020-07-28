// Let's start by creating some variables to begin 

const axios = require("axios");
const inquirer = require("inquirer");

//the builtin require function is the easiest way to include modules that exist in separate files. 

const fs = require('fs');
const path = require('path');

//The basic functionality of require is that it reads a JavaScript file, executes the file, and then proceeds to return the exports object.

//An async function is a function declared
async function main() {
    // the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style
    console.log('Start');
    const userResponse = await iquirer 
    // The prompt() method displays a dialog box that prompts the visitor for input - asks user for a series of information about themselves - Questions
    .prompt([
        // What will the user have to provide in order to generate a successfull readMe? 
        // UserName, projectTitle, projectDescription, installationSteps, instructions for use, licenseInfo (name and url), contributers, and any tests that were run on the app  
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Tittle?",
            name: "projectTittle"
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Provide instructions examples for use.",
            name: "instructionExample"
        },
        {
            type: "input",
            message: "provide License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: "provide License url ",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
            name: "contributorsGitUserName"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
        // Information on how to generate a good readMe referenced from: https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991
        
    ])
}

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();




# ${projectTitle}

# Installation 
${installationProcess}

# Instructions 
${instructionExample}

# License
This project is licensed 

## Tests
${tests}