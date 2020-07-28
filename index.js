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
            message: "What is the title of your project?",
            name: "projectTittle"
        },
        {
            type: "input",
            message: "Please enter a detailed description of your project.",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Please add a step-by-step description of how to get the programming environment running effectively.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Please provide instructions for use.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Please provide instructions examples for use.",
            name: "instructionExample"
        },
        {
            type: "input",
            message: "Please enter your License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: "Please enter your License url if you have one.",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "Please enter your GitHub user names of the contributor(s) if any (If there are mulitple contributors, seperate names with comma - NO SPACE AFTER THE COMMA AND THE NEXT CONTRIBUTOR!).",
            name: "contributorsGitUserName"
        },
        {
            type: "input",
            message: "Please provide examples on how to run tests if applicable.",
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