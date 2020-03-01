const inquirer = require('inquirer');

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
            this._teamArray.push(response);
        }
      
            console.log(this._teamArray);
    }
}