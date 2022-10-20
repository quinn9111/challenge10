const employee = require('./employee');

class engineer extends employee {
    constructor (id, name, emailAddress, github) {
        super (id, name, emailAddress);    
        this.github = github; 
    }

    getRole () {
        return "engineer";
    }

    getGithub () {
        return this.github;
    }
}

module.exports = engineer; 