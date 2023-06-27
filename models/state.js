//db pool (connection to database)

const db = require("../config/config");

class State {
  // get geostore for state
  static async getGeostoreByState(state) {
    try {
      const query = "SELECT id FROM geostore WHERE state = ?";
      const [rows] = await db.query(query, [state]);
      return rows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
module.exports = State;
