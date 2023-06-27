//verify if admin has session. if not redirect to admin login
exports.isAdmin = async (req, res, next) => {
  if (!req.session.admin) {
    res.redirect("/admin");
    return;
  }
  next();
};



