const Employee = require('./Employee');

module.exports = class Engineer extends Employee { 
    constructor(name, email, github) {
        super(name, email);
        this._github = github;

    }

    getGithub() {
        return this._github;
    }

    display(){
        return `
    <div class="card">
        <h5 class="card-header">
            ${this._name}
            <br>
            Engineer
        </h5>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${this._id}</li>
                <li class="list-group-item">Email: ${this._email}</li>
                <li class="list-group-item">Github Profile: ${this._github}</li>
            </ul>
        </div>
    </div>`;
    }
       
} 


