const mysql = require('mysql');

class database{
    constructor(){
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Afront871.',
            database: 'Flask'
        });
        this.connection = connection.connect( error =>{
                if( error ) throw error;
                console.log("Database connect");
            }
        ) 
    }
}

module.exports = database;