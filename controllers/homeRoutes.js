const router = require("express").Router();
const { User, Book } = require("../models");
const withAuth = require("../utils/auth");

router.get("/lists/:id", withAuth, async (req, res) => {
  const bookId = await Book.findByPk(req.params.userId, {
    include: [
      {
        model: Book,
        attributes: ["userid"],
      },
    ],
  });

  const books = bookId.get({ plain: true });
  res.render("lists", {
    books,
  });
});

router.get("/homepage", withAuth, async (req, res) => {
  const userInfo = await User.findByPk(req.session.userId, {
    attributes: { exclude: ["password"] },
    include: [{ model: Post }],
  });

  const user = userInfo.get({ plain: true });

  res.render("homepage", {
    user,
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/search", withAuth, (req, res) => {
  res.render("search");
});

router.get("/account", withAuth, (req, res) => {
  res.render("account");
});

router.get("/lists", withAuth, async (req, res) => {
  const booksresult = await Book.findAll();
  const books = booksresult.map((book) => {
    return book.get({
      plain: true,
    });
  });
  res.render("lists", {
    books,
  });
});

router.get("/recommended", withAuth, (req, res) => {
  res.render("recommended");
});

router.get("/about", withAuth, (req, res) => {
  res.render("about");
});

router.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = router;
