
const User = require("../models/user");

exports.getLoginPage = async (req, res) => {
  res.render("user/login");
};
 
exports.getSignUpPage = async (req, res) => {
  res.render("user/sign-up");
};

// login functionality
//notify user of incorrect credential
exports.login = async (req, res) => {
  const user = new User(req.body);
  const [exist] = await User.getUserByUserName(user.userName);

  if (!exist) {
    console.log("user does not exist");
    res.send(
      '<script>alert("Invalid Username")</script>' +
        '<script>window.location.href = "/user"</script>'
    );
    return;
  }
  const compare = await User.comparePassword(user.password, exist.password);
  if (!compare) {
    console.log("wrong password");
    res.send(
      '<script>alert("Invalid Password")</script>' +
        '<script>window.location.href = "/user"</script>'
    );
    return;
  }
  req.session.user = exist.id;
  req.session.name = exist.firstName
  res.redirect("/");
  console.log(req.session);
};

//sign up functionality
//notify user of duplicate username
exports.signUp = async (req, res) => {
  const user = new User(req.body);
  const [duplicate] = await User.getUserByUserName(user.userName);
  if (duplicate) {
    console.log("duplicate");
    res.send(
      '<script>alert("user with that username already exists")</script>' +
        '<script>window.location.href = "/user/signup"</script>'
    );
    return;
  }
  const result = await User.createUser(user);
  console.log(result);
  res.redirect("/user");
};
