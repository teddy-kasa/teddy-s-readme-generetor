// TODO: Include packages needed for this application

const fs = require ('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What was your project titile?',
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'What was your project discription?',
        
    },
  
    {
        type: 'input',
        name: 'type_input',
        message: 'What was your motivation?',
        
    },
    {
        type: 'input',
        name: 'type_input',
        message: 'Why did you build this project?',
        
    },
    {
        type: 'input',
        name: 'type_input',
        message: 'What problem does it solve?',

    },
    {
        type: 'input',
        name: 'type_input',
        message: 'What did you learn?',
        
    },
    {
        type: 'input',
        name: 'type_input',
        message: 'What makes your project stand out?',
        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project??',
        
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.?',
        
    },
    {
        type: 'input',
        name: 'credit',
        message: ' List your collaborators, if any, with links to their GitHub profiles?',
        
    },
    {
        type: 'list',
        name: 'license',
        message: ' wich license do you use?',
        choices: ["Eclipse","IBM", "BSD", "GNU" , "MIT", "Mozilla", "Zlib","Apache", new inquirer.Separator()]
        
    },
    
    {
        type: 'input',
        name: 'features',
        message: 'list your projects fetures?',
        
    },
    {
        type: 'input',
        name: 'test',
        message: 'write tests for your application?. ',
        
    },
];



// TODO: Create a function to write README file
function writeToFile(data) {
        switch(data.license){
        case "IBM":
            data.licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
            break;
        case "BSD":
            data.licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
            break;
        
        case "Apache":
            data.licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
            break;
        case "GNU":
            data.licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
            break;
        case "IBM":
            data.licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
            break;
        case "Eclipse":
            data.licenseBadge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
            break;
        case "Mozilla":
            data.licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
            break;
        case "MIT":
            data.licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            break;
        case "Zlib":
            data.licenseBadge = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
            break;
        }
fs.writeFile('README.md', `${data.title}\n # ${data.Description}\n## Description\n${data.input}\n## Table of Contents\n\n[Installation](#installation)\n\n[Usage](#usage)\n\n[License](#license)\n\n[Contribute](#contribute)\n\n[Tests](#tests)\n\n[Questions](#questions)\n\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n## License\nThis project is licensed under the ${data.license} license.\n## Contribute\n${data.contribution}\n## Tests\n${data.tests}\n## Questions\n If you have any questions please visit my GitHub at https://github.com/${data.userName} or email me at ${data.email}.`, (error) => 
        error ? console.error(error) : console.log('Awsome'))

};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(writeToFile)
};
// Function call to initialize app

init();

