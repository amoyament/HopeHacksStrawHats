const mysql = require("mysql2");

//create pool function for db querys
const pool = mysql.createPool({
  host: process.env.HOST,
  user: "root",
  password: process.env.PASSWORD,
  database: "hope",
});

module.exports = pool.promise();
