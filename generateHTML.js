const index = require('./index.js');
const fs = require('fs');

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].getRole() === 'Manager') {
      console.log("Manager")
    } else if (array[i].getRole() === 'Engineer') {
      console.log("Engineer")
    } else if (array[i].getRole() === 'Intern') {
      console.log("Intern")
    }
  }
};

function createManagerCard(manager) {
  return `<div class="col s3 m6">
    <div class="card brown lighten-1">
      <div class="card-content white-text">
        <span class="card-title">${manager.name}</span>
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
        <span class="card-title">${engineer.name}</span>
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
        <span class="card-title">${intern.name}</span>
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

  </div > `
};

const innerText = generateHTML();

function writeToFile() {
  fs.writeFile("./TeamRoster.html", innerText, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully");
    }
  });
}

module.exports = { generateHTML, writeToFile }; 