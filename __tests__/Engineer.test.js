const Engineer = require("../lib/Engineer.js");

describe('Initialize engineer name', () => {
    it('should set name properly', () => {
        const engineerName = "Jared";
        const engineer = new Engineer(engineerName, "Jared@fakeemail.com", 801, "JaredGithub");

        expect(engineer.name).toBe(engineerName);
    });
});

describe('Initialize engineer email', () => {
    it('should set email properly', () => {
        const engineerEmail = "Jared@fakeemail.com";
        const engineer = new Engineer("Jared", engineerEmail, 801, "JaredGithub");

        expect(engineer.email).toBe(engineerEmail);
    });
});

describe('Initialize engineer ID', () => {
    it('should set ID properly', () => {
        const engineerID = 800;
        const engineer = new Engineer("Jared", "Jared@fakeemail.com", engineerID, "JaredGithub");

        expect(engineer.ID).toBe(engineerID);
    });
});

describe('Initialize engineer Github', () => {
    it('should set Github properly', () => {
        const engineerGithub = "JaredGithub";
        const engineer = new Engineer("Jared", "Jared@fakeemail.com", 801, engineerGithub);

        expect(engineer.github).toBe(engineerGithub);
    });
});

describe('getGithub() method', () => {
    it('should return the Employee github', () => {
        const getGithub = new Engineer("Jared", "Jared@fakeemail.com", 801, "JaredGithub");

        expect(getGithub.getGithub()).toBe(
            "JaredGithub"
        );
    });
});

describe('getRole() method', () => {
    it('should return the Employee role', () => {
        const getRole = new Engineer("Jared", "Jared@fakeemail.com", 801, "JaredGithub");

        expect(getRole.getRole()).toBe(
            "Engineer"
        );
    });
});