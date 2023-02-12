const inquirer = require("inquirer");

console.log("File is linked.");


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
            console.log(data);
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
            console.log(data);
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
            console.log(data);
            menu();
        })
}

function finishTeam() {
    console.log('Thank you for using our application!');

    process.exit();
}


init();
// inquirer.prompt([
//     {
//         type: 'input',
//         message: 'What is the name of the employee?',
//         name: 'name'
//     },
//     {
//         type: 'input',
//         message: 'What is the employee ID?',
//         name: 'employeeID'
//     },
//     {
//         type: 'input',
//         message: 'What is the email address of the employee?',
//         name: 'email'
//     },
//     {
//         type: 'input',
//         message: 'What is the office number of the employee?',
//         name: 'officeNumber'
//     },
//     {
//         type: 'input',
//         message: 'What is the Github username of the employee?',
//         name: 'github'
//     }
// ])