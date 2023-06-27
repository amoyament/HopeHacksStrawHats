//db pool (connection to database)
const db = require("../config/config");
//encryption library
const bcrypt = require("bcrypt");
class User {
  //User constructor
  constructor(obj) {
    this.firstName = obj?.firstName;
    this.lastName = obj?.lastName;
    this.password = obj?.password;
    this.email = obj?.email;
    this.userName = obj?.userName;
  }

  // parameterized query to get user by id
  static async getUserById(id) {
    try {
      const query = "SELECT * FROM users WHERE id = ?";
      const [rows] = await db.query(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


  // parameterized query to get user by username
  static async getUserByUserName(userName) {
    try {
      const query = `SELECT * FROM users WHERE userName = ?`;
      const [rows] = await db.query(query, [userName]);
      return rows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  // compare password function using becrypt
  static async comparePassword(input, password) {
    return bcrypt.compare(input, password);
  }

    // parameterized query to get create new user
  static async createUser(user) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      const query =
        "INSERT INTO users (firstName, lastName, password, email, userName) VALUES (?, ?, ?, ?,?)";
      const [result] = await db.query(query, [
        user.firstName,
        user.lastName,
        hashedPassword,
        user.email,
        user.userName
      ]);

      return result.insertId;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


}

module.exports = User;
