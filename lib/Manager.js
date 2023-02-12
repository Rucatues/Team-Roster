const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, email, ID, officeNumber) {
        super(name, email, ID)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager; 