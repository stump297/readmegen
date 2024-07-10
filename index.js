const inquirer = require('inquirer');
const colors = require('colors');

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
      message: 'What was your motivation?',
      name: 'motivation',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log(colors.green('Success!'))
      : console.log(colors.red('You forgot your password already?!'))
  );
