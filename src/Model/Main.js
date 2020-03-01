const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const writeFileAsync = util.promisify(fs.writeFile);

class Main {
    constructor() {
        this._teamArray = [];
    } 

    async _display() {
        let teamHTMLString = "";
        for (const teamMember of this._teamArray) {
            teamHTMLString += teamMember.display();
        }  
        const result = Main._templateStart + teamHTMLString + Main._templateEnd;
        
        await writeFileAsync(path.resolve(__dirname, '..', 'res', 'display.html'), result);    
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
                    message: 'Pick your role',
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
      
        await this._display();
    }
}

Main._ENGINEER = 'Engineer';
Main._INTERN = 'Intern';
Main._MANAGER = 'Manager';

Main._templateStart = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <style>
        .page-header {          
            background: lightblue;
            padding: 30px;
            font-size: xx-large;
            text-align: center;
            font-weight: bold;
        }

        .team-roster-container {
            display: flex; 
            padding: 50px;
        }
        
        .card:not(:last-child){
            margin-right: 20px;
        }

        .card-header {
            text-align:center;
            font-weight: bold;
        }

        .card {
            overflow: hidden;
            word-wrap: break-word;
            width: 13rem;
        }

        .list-group-item {
            text-align: left;
            font-family: Times New Roman;

        }
    </style>
    <title>Team Profile</title>
</head>
<body>
    <div class = "page-header">My Team</div>
    <div class="team-roster-container">
    `;

    Main._templateEnd = `
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        
    </body>
    </html>`;


module.exports = Main;