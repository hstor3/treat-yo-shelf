const router = require("express").Router();
const { User, Comment, Book, Review } = require("../models");

router.get("/lists/:id", async (req, res) => {
  const bookId = await Post.findByPk(req.params.userId, {
    include: [
      {
        model: Book,
        attributes: ["userid"],
      },
    ],
  });

  const books = bookId.get({ plain: true });
  // console.log(books);
  res.render("lists", {
    books,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/homepage", async (req, res) => {
  const userInfo = await User.findByPk(req.session.userId, {
    attributes: { exclude: ["password"] },
    include: [{ model: Post }],
  });

  const user = userInfo.get({ plain: true });

  res.render("homepage", {
    user,
    loggedIn: true,
  });
});

router.get("/login", (req, res) => {
  console.log("hiiii");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/search", (req, res) => {
  console.log("reached");
  res.render("search", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/lists", async (req, res) => {
  console.log('we tried')
  const booksresult = await Book.findAll({
    include: [
      {
        model: Review,
        attributes: ['id'],
      }
    ]
  });
  console.log(booksresult)
    const books = booksresult.map((book) => {
      return book.get({
        plain: true })
    })
  // console.log(books)
  res.render("lists", {
    books,
    loggedIn: req.session.loggedIn
  })
  });

router.get("/recommended", (req, res) => {
  res.render("recommended", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
