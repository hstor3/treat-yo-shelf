const withAuth = (req, res, next) => {
  if (req.session.loggedIn) {
    return res.redirect("/login");
  } else {
    return next()
  }
};

module.exports = withAuth;
