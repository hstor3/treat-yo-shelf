const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
  const postInfo = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['email']
      },
    ],
  });
  const posts = postInfo.map((post) => post.get({ plain: true }));
  res.render('homepage', {
    posts,
    loggedIn: req.session.loggedIn
  });
});

router.get('/post/:id', async (req, res) => {
  const postId = await Post.findByPk(req.params.userId, {
    include: [
      {
        model: User,
        attributes: ['id'],
      },
    ],
  });

  const post = postId.get({ plain: true });
  res.render('homepage', {
    ...post,
    loggedIn: req.session.loggedIn
  });
  
router.get("/lists", async (req, res) => {
  try {
    res.render("lists", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    res.render("login", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
});

router.get("/search", async (req, res) => {
  try {
    res.render("search", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
