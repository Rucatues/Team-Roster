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
  </div > `
}

function writeToFile() {
  //add beginning of HTML + create card functions + end of HTML
};

module.exports = sortArray; 