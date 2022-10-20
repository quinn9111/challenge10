class employee {
    constructor (id, name, emailAddress) {
      
        this.id = id;
        this.name = name;
        this.email = emailAddress 
    }

    getId () {
        return this.id;
    }   

    getName () {
        return this.name;
    }

    getEmail () {
        return this.emailAddress;
    }

    getRole () {
        return 'employee'; 
    }
};

module.exports = employee; 