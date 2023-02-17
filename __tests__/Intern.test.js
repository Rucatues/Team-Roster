const Intern = require("../lib/Intern.js");

describe('Initialize intern name', () => {
    it('should set name properly', () => {
        const internName = "Shea";
        const intern = new Intern(internName, "Shea@fakeemail.com", 802, "UT Austin");

        expect(intern.name).toBe(internName);
    });
});

describe('Initialize intern email', () => {
    it('should set email properly', () => {
        const internEmail = "Shea@fakeemail.com";
        const intern = new Intern("Shea", internEmail, 802, "UT Austin");

        expect(intern.email).toBe(internEmail);
    });
});

describe('Initialize intern ID', () => {
    it('should set ID properly', () => {
        const internID = 802;
        const intern = new Intern("Shea", "Shea@fakeemail.com", internID, "UT Austin");

        expect(intern.ID).toBe(internID);
    });
});

describe('Initialize intern school', () => {
    it('should set school properly', () => {
        const internSchool = "UT Austin";
        const intern = new Intern("Shea", "Shea@fakeemail.com", 802, internSchool);

        expect(intern.school).toBe(internSchool);
    });
});

describe('getSchool() method', () => {
    it('should return the Intern school', () => {
        const getEmail = new Intern("Shea", "Shea@fakeemail.com", 802, "UT Austin");

        expect(getEmail.getEmail()).toBe(
            "Shea@fakeemail.com"
        );
    });
});

describe('getRole() method', () => {
    it('should return the Intern role', () => {
        const getRole = new Intern("Shea", "Shea@fakeemail.com", 802, "UT Austin");

        expect(getRole.getRole()).toBe(
            "Intern"
        );
    });
});