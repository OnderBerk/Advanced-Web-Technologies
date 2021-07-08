
const mysql = require("mysql")

class Db {
    constructor() {
        this.connection = mysql.createConnection( {
            host: "localhost",
            user: "root", 
            password: "",
            database: "presentations",
            port: 3308
        }) ;
    }

    connect() {
        return new Promise( (resolve, reject) => {
            this.connection.connect( err => {
                if ( err ) {
                    reject("Connection Error") ;
                } else {
                    resolve() ;
                }
            })
        })
    }

    query(q, val = null) {
        return new Promise( (resolve, reject) => {
            this.connection.query(q, val, (err, result) => {
                if ( err ) {
                    reject("Query Error") ;
                } else {
                    resolve(result) ;
                }
            })
        })
    }

    end() {
        return new Promise( (resolve, reject) => {
            this.connection.end( err => {
                if ( err ) {
                    reject() ;
                } else 
                {
                    resolve()
                }
            })
        })
    }
}

//var db = new Db() ;
module.exports= Db ;