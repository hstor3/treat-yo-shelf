const router = require("express").Router();
const { User, Book, Review } = require("../models");
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

  const reviewId = await Review.findByPk({
    where: {
      review_id: req.params.userId,
    },
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
    // Review,
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
  const booksresult = await Book.findAll({
    include: [
      {
        model: Review,
        attributes: ["review_id"],
      },
    ],
  });
  const books = booksresult.map((book) => {
    return book.get({
      plain: true,
    });
  });

  const reviewResults = await Review.findAll({
    include: [
      {
        model: Book,
        attributes: ["book_id"],
      },
    ],
  });
  const reviews = reviewResults.map((book) => {
    return book.get({
      plain: true,
    });
  });
  res.render("lists", {
    books,
    reviews,
  });
});

router.get("/recommended", withAuth, (req, res) => {
  res.render("recommended");
});

router.get("/about", withAuth, (req, res) => {
  res.render("about");
});

router.get("/", withAuth, (req, res) => {
  res.render("homepage");
});

module.exports = router;
