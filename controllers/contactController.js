//import necessary models
const Contact = require("../models/contact");

//function that renders contact page
exports.getContactPage = async (req, res) => {
res.render("contact");
};

//function that stores contact submissions into database
exports.sendMessage = async (req, res) => {
const contact = new Contact(req.body)
const results = await Contact.uploadContact(contact)
console.log(results);
res.redirect('/contact')

};
 