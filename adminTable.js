require("dotenv").config();

const mysql = require("mysql");

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

  let adminTable = `
  CREATE TABLE IF NOT EXISTS admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`;

  let insertAdminQuery = `
  INSERT INTO admins (username, password)
  VALUES ('luffy', 'pirateking');
`;

  // Assuming you have a database connection object named "db"
  connection.query(adminTable, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("Admin table created successfully");

    connection.query(insertAdminQuery, (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("Admin row inserted successfully");
    });
  });
});
