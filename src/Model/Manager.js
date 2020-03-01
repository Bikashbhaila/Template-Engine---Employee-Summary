const Employee = require('./Employee');

module.exports = class Manager extends Employee { 
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this._officeNumber = officeNumber;

    }

    getOfficeNumber() {
        return this._officeNumber;
    }
   
    
} 