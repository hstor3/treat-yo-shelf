const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  // console.log(req.body);
  const userData = await User.create(req.body);
  req.session.save(() => {
    req.session.userId = userData.user_id;
    req.session.loggedIn = true;

    res.status(200).json(userData);
  });
});

router.post("/login", async (req, res) => {
  //   try {
  const userData = await User.findOne({
    where: { username: req.body.username },
  });

  if (!userData) {
    res
      .status(400)
      .json({ message: "Incorrect username or password, please try again" });
    return;
  }

  const validPassword = userData.checkPassword(req.body.password);

  if (!validPassword) {
    res
      .status(400)
      .json({ message: "Incorrect username or password, please try again" });
    return;
  }

  req.session.save(() => {
    req.session.userId = userData.user_id;
    req.session.loggedIn = true;

    res.json({ user: userData.username, message: "You are now logged in!" });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
