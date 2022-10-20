const generateEngineer = function (engineer) {
    return `
            <div class="Profile-header">
                <h3>Engineer</h3>
            </div>
            <div class="Profile-body">
            <p class="id">ID: ${engineer.name}</p>
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
    `
}

const generateManager = function (manager) {
    return `
            <div class="Profile-header">
                <h3>Manager</h3>
            </div>
            <div class="Profile-body">
                <p class="id">ID: ${manager.name}</p>
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
    `;
}

const generateIntern = function (intern) {
    return `
            <div class="Profile-header">
                <h3>Intern</h3>
            </div>
            <div class="Profile-body">
                <p class="id">ID: ${intern.name}</p>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    `
};

generateHTML = (data) => {

    teamMember = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerProfile = generateManager(employee);

            teamMember.push(managerProfile);
        }

        if (role === 'Engineer') {
            const engineerProfile = generateEngineer(employee);

            teamMember.push(engineerProfile);
        }

        if (role === 'Intern') {
            const internProfile = generateIntern(employee);

            teamMember.push(internProfile);
        }
        
    }

    const employeeProfiles = teamMember.join('')
    const generateMember = generateSite(employeeProfiles); 
    return generateMember;

}

const generateSite = function (employeeProfiles) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>My Team</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>1
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="Team">
                  ${employeeProfiles}
              </div>
          </div>
      </main>
  </body>
 </html>
`;
}

module.exports = generateHTML; 