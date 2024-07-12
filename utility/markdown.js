function generateMarkdown(data) {
  return `## Project Title
  
${data.title}



## Description

${data.description}



## instructions 
${data.instructions}

## License

${(data.license)}


## Motivation 
${data.motivation}

## Who is this App for? 

${data.who}

## Contact Info 

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).
`;
}

module.exports = generateMarkdown;