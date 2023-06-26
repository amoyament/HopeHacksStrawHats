const db = require("../config/config");
const bcrypt = require("bcrypt");
class Admin {

  static async getAdminByUserName(id) {
    try {
      const query = "SELECT * FROM admins WHERE username = ?";
      const [rows] = await db.query(query, [id]);
      return rows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async deleteUserById(userId) {
    try {
      const query = `DELETE FROM users WHERE id = ?`;
      const [result] = await db.query(query, [userId]);
      return result.affectedRows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  
  static async updateEmail(userId, newEmail) {
    try {
      const query = `UPDATE users SET email = ? WHERE id = ?`;
      const [result] = await db.query(query, [newEmail, userId]);
      return result.affectedRows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  
  static async getAllUsers() {
    try {
      const query = `SELECT * FROM users`;
      const [rows] = await db.query(query);
      return rows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  

  


}

module.exports = Admin;
