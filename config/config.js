const mysql = require('mysql2')

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "hope",
})

  module.exports = pool.promise();
