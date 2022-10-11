const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
fs = require('fs');
const util = require('util');

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief description of your project.',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Provide installation instructions for your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information of your project.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidelines of your project.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions of your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license will you use for your project?',
            choices: ['AWS', 'Apache', 'Azure', 'No license']
    },
    {
            type: 'input',
            name: 'github',
            message: 'Provide your Github user.',
    },  
    {
            type: 'input',
            name: 'email',
            message: 'Provide your email address.',
    },
    ]

    function writeToFile(fileName, answers) {
        fs.writeFile(fileName, answers, error => {
          if (error) {
            return console.log('Sorry there was an error : ' + error);
          }
        })
      }

const createReadMe = util.promisify(writeToFile);
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readmeFile = generateMarkdown(answers);
    await createReadMe('README.md', readmeFile);
    
  } catch (error) {

  }
};

init();