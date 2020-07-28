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
    ]);

    // call on our 'starting' function and userResponse

    console.log('starting');
    console.log(userResponse);

    // Now I will create more variables that call my new methods 

    const gitUsername = userRepsonse.username;
    const projectTittle = userResponse.projectTittle;
    const projectDescription = userResponse.projectDescription;
    const installationProcess = userResponse.installationProcess;
    const instruction = userResponse.instruction;
    const instructionExample = userResponse.instructionExample;
    const licenseName = userResponse.licenseName;
    const licenseUrl = userResponse.licenseUrl;
    const contributorUserNames = userResponse.contributorsGitUserName;
    const tests = userResponse.tests;

    // Using axios npm and .get to make http requests from node.js

    // this first await for the main user of the program  
    const gitResponse = await axios.get(`https://api.github.com/users/${gitUsername}`);
    // calling function gitResponse and the data method
    const gitData = gitResponse.data;
    // calling function gitData and the login, email, location and html_url methods
    const gitName = gitData.login;
    const gitEmail = gitData.email;
    const gitlocation = gitData.location;
    const gitUrl = gitData.html_url;
    const gitProfileImage = gitData.avatar_url;

    // this next part is for the contributers if any 
    var resultContributor;
      for (i=0; i<contributorUserNamesArray.length; i++){
        var contributorsGitUserName = contributorUserNamesArray[i]
        const gitResponse2 = await axios.get(`https://api.github.com/users/${contributorsGitUserName}`);
        var gitContribuProfileImage = gitResponse2.data.avatar_url;
        var gitContribuUrl = gitResponse2.data.html_url;
        var gitContribuEmail = gitResponse2.data.email;
        var resultContributor = resultContributor + (`
            
        
        \n <img src="${gitContribuProfileImage}" alt="drawing" width="150" display="inline"/> ${contributorsGitUserName}  GitHubLink: ${gitContribuUrl}`);
    }
    var result = (`
# ${projectTittle} 
${projectDescription}
\n* [Installation](#Installation)
\n* [Instructions](#Instructions)
\n* [License](#License)
\n* [Contributors](#Contributors)
\n* [Author](#Author)
\n* [Tests](#Tests)
    
    `)

    var writeResult = fs.writeFileSync(path.join(__dirname, '../GoodReadMeGenerator', 'readMe.md'), result )
    console.log("file ready!")

// Information on how to generate a good readMe referenced from: https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991
        
    ])
}



