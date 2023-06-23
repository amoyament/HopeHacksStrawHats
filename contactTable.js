require('dotenv').config()

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "hope",
  });
  connection.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log("Connected to the MySQL server.");
    let contactTable = `
     CREATE TABLE IF NOT EXISTS contacts (
        email VARCHAR(255),
        phone VARCHAR(20),
        date VARCHAR(20),
        reason VARCHAR(255),
        description VARCHAR(1000),
        name VARCHAR(100)
    );`;

    connection.query(contactTable, function (err, results, fields) {
        if (err) {
          console.log(err.message);
        }
    });
})




