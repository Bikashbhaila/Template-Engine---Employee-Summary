const Employee = require('./Employee');

module.exports = class Manager extends Employee { 
    constructor(name, email, officeNumber) {
        super(name, email);
        this._officeNumber = officeNumber;

    }

    getOfficeNumber() {
        return this._officeNumber;
    }
   
    
} 