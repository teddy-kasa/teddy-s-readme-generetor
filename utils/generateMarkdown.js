  
// TODO: Create a function that returns a license badge based on which license is passed in
function generateBadge(badges) {
    switch(badges.license){
    case "IBM":
        badges.licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
        break;
    case "BSD":
        badges.licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        break;
    case "Eclipse":
        badges.licenseBadge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
        break;
    case "Apache":
        badges.licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
    case "GNU":
        badges.licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
        break;
    case "IBM":
        badges.licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
        break;
    
    case "Mozilla":
        badges.licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        break;
    case "MIT":
        badges.licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        break;
    case "Zlib":
        badges.licenseBadge = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
        break;
    }

// If there is no license, return an empty string
function renderLicenseBadge (license) {
    if (license == 'case'){
    badge == badges.licenseBadge;
    } else{
        badges == "";
    }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}}

module.exports = generateMarkdown;