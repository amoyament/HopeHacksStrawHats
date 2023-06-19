const db = require("../config/config");
const bcrypt = require("bcrypt");
class User {
  constructor(obj) {
    this.firstName = obj?.firstName;
    this.lastName = obj?.lastName;
    this.password = obj?.password;
    this.email = obj?.email;
  }

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

  static async getUserByEmail(email) {
    try {
      const query = `SELECT * FROM users WHERE email = ?`;
      const [rows] = await db.query(query, [email]);
      return rows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async comparePassword(input, password) {
    return bcrypt.compare(input, password)
  }
  

  static async createUser(user) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      const query =
        "INSERT INTO users (firstName, lastName, password, email) VALUES (?, ?, ?, ?)";
      const [result] = await db.query(query, [
        user.firstName,
        user.lastName,
        hashedPassword,
        user.email,
      ]);

      return result.insertId;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


}

module.exports = User;
