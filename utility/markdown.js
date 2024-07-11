function generateMarkdown(data) {
  return `## Project Title
  
${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}



## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)






## Installation 

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage 
${data.usage}


${renderLicenseSection(data.license)}


## Contributing 
${data.contributing}

## Tests 
To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`


## Questions 

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).
`;
}

module.exports = generateMarkdown;