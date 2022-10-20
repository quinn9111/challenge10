const employee = require('./employee');

class manager extends employee {
    constructor (id, name, emailAddress, officeNumber) {
        super (id, name, emailAddress);    
        this.officeNumber = officeNumber; 
    }

    getRole () {
        return "manager";
    }

    getOfficeNumber () {
        return this.officeNumber;
    }
}

module.exports = manager; 