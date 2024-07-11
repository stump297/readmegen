//adding the required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//generating  prompts for the user to answer
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Project Description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What was your motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'credits?',
      name: 'credits',
    },{
      type: 'input',
      message: 'useage instructions?',
      name: 'instructions',
    },{
      type: 'input',
      message: 'who is it for?',
      name: 'who',
    },{
      type: 'input',
      message: 'GitHub username',
      name: 'github',
    },
    {
      type: 'input',
      message: 'email address',
      name: 'email',
    },
    {
      type: 'input',
      message: 'license used?',
      name:license,
    },
  ])
  //generating markdown
  .then((data) => {
    let markdown = generateMarkdown ({
      title: `${data.title}`,
      description: `${data.description}`,
      instructions: `${data.instructions}`,
      who: `${data.who}`,
      motivation: `${data.motivation}`,
      name: `${data.name}`,
      license: `${data.license}`,
      email: `${data.email}`,
      github: `${data.github}`,
    })
    //writing the file
    fs.writeFile('README.md', markdown, (err) => {
        if (err) {
            console.log(err); 
        } else {
            console.log('success');
        }
    })
  });


// intializing the app
function init() {}

// calling the initialization
init();