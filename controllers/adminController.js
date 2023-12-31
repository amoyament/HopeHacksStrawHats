//import necessary models
const Admin = require("../models/admin");
const User = require("../models/user");

//function that loads admin login page
//if there is an active admin session, redirect to console
exports.getAdminPage = async (req, res) => {
    if(req.session.admin){
        res.redirect('/admin/console')
        return
    }
  res.render("admin/admin");
};

//load all users from user table
//render console with user list
exports.console = async (req, res) => {
  const users = await Admin.getAllUsers();
  res.render("admin/admin-console", { users });
};

//login function
//alert user of incorrect credentials
exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const [exist] = await Admin.getAdminByUserName(username);
  if (!exist) {
    console.log(username, " ", password);
    res.send(
      '<script>alert("Invalid Username")</script>' +
        '<script>window.location.href = "/admin"</script>'
    );
    return;
  }
  const compare = password == exist.password;
  if (!compare) {
    console.log("wrong password");
    res.send(
      '<script>alert("Invalid Password")</script>' +
        '<script>window.location.href = "/admin"</script>'
    );
    return;
  }
  req.session.admin = exist.id;
  res.redirect("/admin/console");
  console.log(req.session);
};

//update user email
exports.update = async (req, res) => {
  console.log(req.body);
  const user = await User.getUserById(req.body.userId);
  if (!user) {
    res.redirect("/admin/console");
    return;
  }

  const result = await Admin.updateEmail(req.body.userId, req.body.email);
  console.log(result)
  res.redirect("/admin/console");
};

//delete user
exports.delete = async (req, res) => {

    console.log(req.body);
  const user = await User.getUserById(req.body.userId);
  if (!user) {
    res.redirect("/admin/console");
    return;
  }

  const result = await Admin.deleteUserById(req.body.userId)
  console.log(result)
  res.redirect("/admin/console");
 
};

//logout
exports.logout = async (req, res) => {

    req.session.destroy((err) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/admin");
        }
      });
 
};