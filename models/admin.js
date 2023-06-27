//db pool (connection to database)
const db = require("../config/config");


class Admin {
//paramterzied query to retrieve admin by username
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
//paramterzied query to delete users by id
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
  //paramterzied query to udpate username of users

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
  //paramterzied query to retrieve all users from user table

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
