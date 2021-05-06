const router = require("express").Router();
const { User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// router.get("/", async (req, res) => {
//   const postInfo = await Book.findAll({
//     include: [
//       {
//         model: User,
//         attributes: ["email"],
//       },
//     ],
//   });
//   const posts = postInfo.map((post) => post.get({ plain: true }));
//   res.render("homepage", {
//     posts,
//     loggedIn: req.session.loggedIn,
//   });
// });

router.get("/lists", async (req, res) => {
  // alert();
  console.log("hey");
  res.render("lists", {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/lists/:id', withAuth, async (req, res) => {
  const bookId = await Post.findByPk(req.params.userId, {
    include: [
      {
        model: Book,
        attributes: ["userid"],
      },
    ],
  });

  const books = bookId.get({ plain: true });
  console.log(books)
  res.render('lists', {
    books,
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

router.get('/search', withAuth, (req, res) => {
  res.render('search', {
    loggedIn: req.session.loggedIn
  })
});

router.get('/lists', withAuth, (req, res) => {
  res.render('lists', {
    loggedIn: req.session.loggedIn
  })
});

router.get('/recommended', withAuth, (req, res) => {
  res.render('recommended', {
    loggedIn: req.session.loggedIn
  })
});

router.get('/about', withAuth, (req, res) => {
  res.render('about', {
    loggedIn: req.session.loggedIn
  })
});

router.get('/', withAuth, (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  })
});

module.exports = router;