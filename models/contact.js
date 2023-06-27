//db pool (connection to database)
const db = require("../config/config");

class Contact {

  //contact constructer
    constructor(obj) {
      this.email = obj?.email;
      this.phone = obj?.phone;
      this.date = obj?.date;
      this.reason = obj?.reason;
      this.description = obj?.description;
      this.name = obj?.name;
    }

    // parameterized query to upload contact to database
    static async uploadContact(contact) {
        try {      
          const query =
            "INSERT INTO contacts (email, phone, date, reason, description, name) VALUES (?, ?, ?, ?, ?, ?)";
          const [result] = await db.query(query, [
            contact.email,
            contact.phone,
            contact.date,
            contact.reason,
            contact.description,
            contact.name,
          ]);
      
          return result.insertId;
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
      
}
module.exports = Contact