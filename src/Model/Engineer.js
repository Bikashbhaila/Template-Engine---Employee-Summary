const Employee = require('./Employee');

module.exports = class Engineer extends Employee { 
    constructor(name, email, github) {
        super(name, email);
        this._github = github;

    }

    getGithub() {
        return this._github;
    }
   
    
} 

