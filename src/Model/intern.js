const Employee = require('./Employee');

module.exports = class Intern extends Employee { 
    constructor(name, email, school) {
        super(name, email);
        this._school = school;

    }

    getSchool() {
        return this._school;
    }
   
    
} 