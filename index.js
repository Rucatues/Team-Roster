console.log("File is linked.");

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the employee ID?',
        name: 'employeeID'
    },
    {
        type: 'input',
        message: 'What is the email address of the employee?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the office number of the employee?',
        name: 'officeNumber'
    },
    {
        type: 'input',
        message: 'What is the Github username of the employee?',
        name: 'github'
    }
])