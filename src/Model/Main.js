const inquirer = require('inquirer');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

module.exports = class Main {
    constructor() {
        this._teamArray = [];
    } 

    async run() {
        const { teamSize } = await inquirer.prompt([{
            type: 'input',
            name: 'teamSize',
            message: 'Enter number of employees in your team',
            default: 2,
        }])

        for (let i = 0; i < teamSize; i++) {
            console.log('*******************');
            const response = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter your name',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter your email',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Enter your role',
                    choices: ['Engineer', 'Intern', 'Manager']
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your github',
                    when: ({ role }) => role === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter your Office Number',
                    when: ({ role }) => role === 'Manager'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter your School Name',
                    when: ({ role }) => role === 'Intern'
                }
                  
            ]);
            
            const {
                name,
                email,
                role,
                github,
                school,
                roomNumber
            } = response;

            if (role ==="Engineer") {
                this._teamArray.push(new Engineer(name, id, email, github));
            }
            if (role ==="Intern") {
                this._teamArray.push(new Intern(name, id, email, school));
            }
            if (role ==="Manager") {
                this._teamArray.push(new Manager(name, id, email, officeNumber));
            }
        }
      
            console.log(this._teamArray);
    }
}