//adding the required packages

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// add questions to an array
const questions = [
  { type: "input", message: "what is your GitHub username?", name: "username" },
  { type: "input", message: "What is your email address?", name: "email" },
  { type: "input", message: "What is your project's name?", name: "title" },
  {
    type: "input",
    message: "Write a short description of your project:",
    name: "description",
  },
  {
    type: "list",
    message: "What type of license should you project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing the repo?",
    name: "contributing",
  },
];

// writing file
const writeToFile = (data) => {
  fs.writeFile("generated-README.md", data, (err) => {
    err ? console.error(err) : console.log("File created!");
  });
};

// initializing app
function init() {
  inquirer.prompt(questions).then((data) => {
    // send the data to generateMarkdown to format it
    let markdown = generateMarkdown(data);
    writeToFile(markdown);
  });
}

// Calling the app
init();
