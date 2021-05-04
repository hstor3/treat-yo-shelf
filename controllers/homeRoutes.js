const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  const postInfo = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ["email"],
      },
    ],
  });
  const posts = postInfo.map((post) => post.get({ plain: true }));
  res.render("homepage", {
    posts,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/posts", async (req, res) => {
  // alert();
  console.log("hey");
  res.render("posts", {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/posts/:id', withAuth, async (req, res) => {
  const postId = await Post.findByPk(req.params.userId, {
    include: [
      {
        model: User,
        attributes: ["id"],
      },
    ],
  });

  const post = postId.get({ plain: true });
  res.render('homepage', {
    post,
    loggedIn: req.session.loggedIn
  })
});


router.get('homepage', withAuth, async (req, res) => {
  const userInfo = await User.findByPk(req.session.userId, {
    attributes: { exclude: ['password'] },
    include: [{ model: Post }],
  });

  const user = userInfo.get({ plain: true });

  res.render('homepage', {
    user,
    loggedIn: true
  })
});

  router.get('/login', (req, res) => {
    console.log('hiiii')
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login')
  })

router.get('/search', withAuth, async (req, res) => {
  res.render('search', {
    loggedIn: req.session.loggedIn
  })
});

module.exports = router;