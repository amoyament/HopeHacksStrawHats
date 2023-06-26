exports.isAdmin = async (req, res, next) => {
  if (!req.session.admin) {
    res.redirect("/admin");
    return;
  }
  next();
};



