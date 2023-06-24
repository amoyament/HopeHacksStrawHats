const Contact = require("../models/contact");
exports.getContactPage = async (req, res) => {
// load the contact page here | res.render("contact");
};

exports.sendMessage = async (req, res) => {
const contact = new Contact(req.body)
const results = await Contact.uploadContact(contact)
console.log(results);

};
