const Employee = require("../lib/Employee.js");

describe('Initialize employee name', () => {
    it('should set name properly', () => {
        const employeeName = "Harry";
        const employee = new Employee(employeeName, "Employee@fakeemail.com", 900);

        expect(employee.name).toBe(employeeName);
    });
});

describe('Initialize employee email', () => {
    it('should set email properly', () => {
        const employeeEmail = "Employee@fakeemail.com";
        const employee = new Employee("Harry", employeeEmail, 900);

        expect(employee.email).toBe(employeeEmail);
    });
});

describe('Initialize employee ID', () => {
    it('should set ID properly', () => {
        const employeeID = 900;
        const employee = new Employee("Harry", "Employee@fakeemail.com", employeeID);

        expect(employee.ID).toBe(employeeID);
    });
});

