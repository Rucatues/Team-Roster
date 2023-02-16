const fs = require('fs');

let managerArray = [];
let engineerArray = [];
let internArray = [];


function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].getRole() === 'Manager') {
      let manCard = createManagerCard(array[i]);
      managerArray.push(manCard);
      console.log(managerArray);
    } else if (array[i].getRole() === 'Engineer') {
      let engCard = createEngineerCard(array[i]);
      engineerArray.push(engCard);
      console.log(engineerArray);
    } else if (array[i].getRole() === 'Intern') {
      let intCard = createInternCard(array[i]);
      internArray.push(intCard);
      console.log(internArray);
    }
  }
};

function generateHTML() {
  // console.log("If this is displaying, the generateHTML function is working");
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <link href="style.css" rel="stylesheet">
      <title>Team Information</title>
  </head>
  <body>
      <div class="container">
          <div class="row blue-grey lighten-1">
      <h1 class="blue-text col s12 white-text center-align">My Team</h1>
          </div>
          <div class="row">
        ${managerArray.join('')}
        ${engineerArray.join('')}
        ${internArray.join('')}
  </div> 
  </div>
    <script src="/Users/kellymclain/bootcamp/Homework/Team-Profile-Generator/index.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>`
};

function createManagerCard(manager) {
  return `<div class="col s3 m6">
    <div class="card brown lighten-1">
      <div class="card-content white-text">
        <span class="card-title">${manager.name} (Manager)</span>
        <ul>
          <li>ID: ${manager.ID}</li >
          <li>Office Number: ${manager.officeNumber}</li>
        </ul >
      </div >
        <div class="card-action">
            <a href="mailto:${manager.email}">Click here to Email</a>
        </div>
    </div >
  </div > `
};

function createEngineerCard(engineer) {
  return `<div class="col s3 m6">
    <div class="card brown lighten-1">
      <div class="card-content white-text">
        <span class="card-title">${engineer.name} (Engineer)</span>
        <ul>
          <li>ID: ${engineer.ID}</li >
          <li>Github: <a href="github.com/${engineer.github}"</a></li>
        </ul >
      </div >
        <div class="card-action">
            <a href="mailto:${engineer.email}">Click here to Email</a>
        </div>
    </div >
  </div > `
};

function createInternCard(intern) {
  return `<div class="col s3 m6">
    <div class="card brown lighten-1">
      <div class="card-content white-text">
        <span class="card-title">${intern.name} (Intern)</span>
        <ul>
          <li>ID: ${intern.ID}</li >
          <li>School: ${intern.school}</li>
        </ul >
      </div >
        <div class="card-action">
            <a href="mailto:${intern.email}">Click here to Email</a>
        </div>
    </div >
  </div >`
};


function writeToFile() {
  const innerText = generateHTML();
  fs.writeFile("./TeamRoster.html", innerText, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully");
    }
  });
}

module.exports = { generateHTML, writeToFile, sortArray }; 