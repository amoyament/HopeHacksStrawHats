const User = require("../models/user");

exports.getLoginPage = async (req, res) => {
  res.render("login");
};

exports.getSignUpPage = async (req, res) => {
  res.render("signUp");
};

exports.login = async (req, res) => {
  const user = new User(req.body);
  const [exist] = await User.getUserByEmail(user.email);

  if (!exist) {
    console.log("user does not exist");
    return;
  }
  const compare = await User.comparePassword(user.password, exist.password);
  if (!compare) {
    console.log("wrong password");
  }
  req.session.user = exist.id;
  req.session.name = exist.firstName + " " + exist.lastName;

  console.log(req.session);
};

exports.signUp = async (req, res) => {
  const user = new User(req.body);
  const [duplicate] = await User.getUserByEmail(user.email);
  if (duplicate) {
    console.log("duplicate");
    return;
  }
  const result = await User.createUser(user);
  console.log(result);
};
