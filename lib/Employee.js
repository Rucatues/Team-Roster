class Employee {
    constructor(name, email, ID) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getid() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee; 