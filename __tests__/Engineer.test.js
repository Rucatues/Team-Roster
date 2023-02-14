const Index = require(./index.js)

describe('Engineer', () => {

    describe('Instance', () => {
        it('should be an instance of Employee class', () => {
            const engineer = new Employee();

            expect(engineer).toBeInstanceOf(Employee);
        });
    });

    describe('Initialize name', () => {
        it('should set name properly', () => {
            const name = 'Test Engineer Name';
            const engineerName = new Engineer(name);

            expect(engineerName.name).toBe(name);
        });
    });

    describe('Initialize email', () => {
        it('should set email properly', () => {
            const email = 'fakeemail@gmail.com';
            const engineerEmail = new Engineer(email);

            expect(engineerEmail.email).toBe(email);
        });
    });

    describe('Initialize ID', () => {
        it('should set ID properly', () => {
            const id = '880';
            const engineerID = new Engineer(id);

            expect(engineerID.id).toBe(id);
        });
    });

    describe('Initialize Github', () => {
        it('should set Github username properly', () => {
            const github = 'fakeUserName;
            const engineergithub = new Engineer(github);

            expect(engineergithub.github).toBe(github);
        });
    });