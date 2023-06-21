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
      // Wouldn't we return id and not rows?
      return rows;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
// Does this need to be in loss model? What is it doing?
module.exports = State;
