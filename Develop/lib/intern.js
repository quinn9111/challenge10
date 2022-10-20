const employee = require('./employee');

class intern extends employee {
    constructor (id, name, emailAddress, school) {
        super (id, name, emailAddress);    
        this.school = school; 
    }

    getRole () {
        return "intern";
    }

    getSchool () {
        return this.github;
    }
}

module.exports = intern; 