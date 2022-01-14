var mysql = require('mysql2/promise');
const crypto = require('crypto');

class User {
    constructor() {
        this.connection = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'bnc'});
    }

    sha1(data) {
        return crypto.createHash("sha1").update(data, "binary").digest("hex");
    }


    async login(email, password) {        
        const sqlConnection = new SQLConnection();
        this.connection.connect();
        const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${this.sha1(password)}'`;
        const result = await this.connection.query(query);
        this.connection.disconnect();


        if (result.length > 0) {
            return true
        } else {
            return false
        }
    }

}
//INSERT INTO `users`(`id`, `email`, `password`, `rol`) VALUES (1, 'jmvillagra6@gmail.com', SHA1('password'),'ADMIN');

module.exports = User;