const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./generateHTML.js");

let Employees = [];


function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the manager?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the ID of the manager?',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'What is the email of the manager?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the office number of the manager?',
            name: 'officeNumber'
        },
    ])
        .then((data) => {
            // console.log(data);
            const manager = new Manager(data.name, data.email, data.ID, data.officeNumber);
            Employees.push(manager);
            menu();
        })
}

function menu() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an engineer, intern, or finish building your team?',
            name: 'nextstep',
            choices: [
                'Add Engineer',
                'Add Intern',
                'Finish Building Team',
            ]
        }
    ])
        .then((data) => {
            console.log(data);
            if (data.nextstep === 'Add Engineer') {
                addEngineer();
            } else if (data.nextstep === 'Add Intern') {
                addIntern();
            } else {
                finishTeam();
            }
        })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Engineer?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the ID of the Engineer?',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'What is the email of the Engineer?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the Github username of the Engineer?',
            name: 'github'
        },
    ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.email, data.ID, data.github);
            Employees.push(engineer);
            menu();
        })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Intern?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the ID of the Intern?',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'What is the email of the Intern?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the school of the Intern?',
            name: 'school'
        },
    ])
        .then((data) => {
            const intern = new Intern(data.name, data.email, data.ID, data.school);
            Employees.push(intern);
            menu();
        })
}

function finishTeam() {
    console.log('Thank you for using our application!');
    console.log(Employees);
    generateHTML(Employees);
    process.exit();
}


init();