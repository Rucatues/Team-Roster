const Manager = require("../lib/Manager");

describe('Initialize manager name', () => {
    it('should set name properly', () => {
        const managerName = 'Sally';
        const manager = new Manager(managerName, "Sally@fakeemail.com", 800, 200);

        expect(manager.name).toBe(managerName);
    });
});

describe('Initialize manager email', () => {
    it('should set email properly', () => {
        const managerEmail = 'Sally@fakeemail.com';
        const manager = new Manager("Sally", managerEmail, 800, 200);

        expect(manager.email).toBe(managerEmail);
    });
});

describe('Initialize manager ID', () => {
    it('should set ID properly', () => {
        const managerID = 800;
        const manager = new Manager("Sally", "Sally@fakeemail.com", managerID, 200);

        expect(manager.ID).toBe(managerID);
    });
});

describe('Initialize manager office number', () => {
    it('should set office number properly', () => {
        const managerOfficeNum = 200;
        const manager = new Manager("Sally", "Sally@fakeemail.com", 800, managerOfficeNum);

        expect(manager.officeNumber).toBe(managerOfficeNum);
    });
});