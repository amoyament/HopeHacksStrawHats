const db = require("../config/config");

//Do we need to make state class? Threw errors when no class, but not sure we need it for loss
class State {
  // or should this be stateName
  static async getGeostoreByState(state) {
    try {
      const query = "SELECT id FROM geostore WHERE state = ?";
      // Should this be rows or columns? :
      // we are awaiting state, yes?
      const [rows] = await db.query(query, [state]);
      return rows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
module.exports = State;
