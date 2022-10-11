function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#instruction)
  * [Usage](#usage)
  * [Tests](#test)
  * [Questions](#Questions)

  ## [Description](#table-of-contents)
  ${answers.description}
  ## [Installation](#table-of-contents)
  ${answers.instructions}
  ## [Usage](#table-of-contents)
  ${answers.usage}
  ## [License](#table-of-contents)
  ${answers.license}
  ## [Contribution](#table-of-contents)
  ${answers.contribution}
  ## [Tests](#table-of-contents)
  ${answers.tests}
  ## [Questions](#table-of-contents)
  ## GitHub: (https://github.com/${answers.github})
  ## Email: ${answers.email}
`;
}

module.exports = generateMarkdown;