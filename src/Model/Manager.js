const Employee = require('./Employee');

module.exports = class Manager extends Employee { 
    constructor(name, email, officeNumber) {
        super(name, email);
        this._officeNumber = officeNumber;

    }

    getOfficeNumber() {
        return this._officeNumber;
    }
   
    display(){
        return `
    <div class="card">
        <h5 class="card-header">
            ${this._name}
            <br>
            Manager
        </h5>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${this._id}</li>
                <li class="list-group-item">Email: ${this._email}</li>
                <li class="list-group-item">Office Number: ${this._officeNumber}</li>
            </ul>
        </div>
    </div>`;
    }
} 