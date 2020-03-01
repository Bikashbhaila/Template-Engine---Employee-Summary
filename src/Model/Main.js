const inquirer = require('inquirer');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Main {
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
                    choices: [Main._ENGINEER, Main._INTERN, Main._MANAGER]
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your github',
                    when: ({ role }) => role === Main._ENGINEER
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter your Office Number',
                    when: ({ role }) => role === Main._MANAGER
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter your School Name',
                    when: ({ role }) => role === Main._INTERN
                }
                  
            ]);
            
            const {
                name,
                email,
                role,
                github,
                school,
                officeNumber
            } = response;

            if (role ==="Engineer") {
                this._teamArray.push(new Engineer(name, email, github));
            }
            if (role ==="Intern") {
                this._teamArray.push(new Intern(name, email, school));
            }
            if (role ==="Manager") {
                this._teamArray.push(new Manager(name, email, officeNumber));
            }
        }
      
        
    }
}

Main._ENGINEER = 'engineer';
Main._INTERN = 'intern';
Main._MANAGER = 'manager';


module.exports = Main;