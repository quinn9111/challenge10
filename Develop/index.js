const generateHTML = require('./utils/generateHTML');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');

const teamMember = []; 

const newEmployee = () => {
  return inquirer.prompt ([
      {
          name: 'role',
          type: 'list',
          message: "What is the role of the employee?",
          choices: ['Engineer', 'Intern', 'Manager']
      },
      {
          name: 'name',
          type: 'input',
          message: "What is the employee's full name?", 
      },
      {
          name: 'id',
          type: 'input',
          name: 'id',
          message: "What is the employee's ID?",
      },
      {
          name: 'emailAddress',
          type: 'input',
          message: "What is the employee's email address?",
      },
      {   
        name: 'officeNumber',
        type: 'input',
        message: "What is the manager's office number?",
    },
      {
          name: 'github',
          type: 'input',
          message: "What is the employee's github username?",
      },
      {   
          name: 'school',
          type: 'input',
          message: "What is the intern's school",
      },
      {
        name: 'addAnotherEmployee',
        type: 'confirm',
        message: 'Do you have more employees to add?',
        default: false
    }
  ])
  .then(employeeRecord => {

      let { role, name, id, emailAddress, officeNumber, github, school, addAnotherEmployee } = employeeRecord; 
      let employee; 

      if (role === "Engineer") {
          employee = new engineer ( id, name, emailAddress, github);

          console.log(employee);
      

      } else if (role === "Intern") {
          employee = new intern ( id, name, emailAddress, school);

          console.log(employee);

      } else if (role === "Manager") {
        employee = new manager ( id, name, emailAddress, officeNumber);

        console.log(employee);
      }


      teamMember.push(employee); 

      if (addAnotherEmployee) {
        return newEmployee(teamMember); 
    } else {
        return teamMember;
      }
    })
};

const writeFile = data => {
  fs.writeFile('./index.html', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log("Your team profile has been successfully created! Please check out the index.html")
      }
  })
}; 

newEmployee()
  .then(teamMember => {
    return generateHTML(teamMember);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });