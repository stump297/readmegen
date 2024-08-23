// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "none") {
    return "";
  }
}

// Function that returns the license link

function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT](https://opensource.org/license/mit)";
  } else if (license === "APACHE 2.0") {
    return "[APACHE 2.0](https://opensource.org/license/apache-2-0)";
  } else if (license === "GPL 3.0") {
    return "[GPL 3.0](https://opensource.org/license/gpl-3-0)";
  } else if (license === "BSD 3") {
    return "[BSD 3](https://opensource.org/license/bsd-3-clause)";
  } else if (license === "none") {
    return "";
  }
}

// Function that returns the license section of README

function renderLicenseSection(license) {
  if (license != "none") {
    let licenseLink = renderLicenseLink(license);
    return `## License
    
  This application is covered under the ${licenseLink} license.`;
  } else {
    return "";
  }
}

// Function to generate markdown for README

function generateMarkdown(data) {
  let license = `${data.license}`;
  let licenseBadge = renderLicenseBadge(license);
  let licenseSection = renderLicenseSection(license);
  return `# ${data.title}

  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation

  To install the necessary dependencies, run the following command:

  
  ${data.dependencies}
  

  ## Usage

  ${data.usage}
  
  ${licenseSection}

  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  
  ${data.tests}


## Contact Info 

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
