const router = require("express").Router();
const { Book } = require("../../models");

// gets book by pk
router.get("/books", async (req, res) => {
  // req.session.userId
  let booksresult = await Book.findByPk(req.params.id, {
    include: [
      {
        model: Book,
        attributes: ["id"],
      },
    ],
  });
  const books = booksresult.get({ plain: true });
  res.render("lists", {
    books,
    loggedIn: req.session.loggedIn,
  });
});

// finds book id by pk
router.get("/books/:id", async (req, res) => {
  const bookData = await Book.findByPk(req.params.id, {
    include: [
      {
        model: Book,
        attributes: ["id"],
      },
    ],
  });

  const book = bookData.get({ plain: true });
});

// adds book to database
router.post("/", (req, res) => {
  Book.create({
    title: req.body.title,
    author: req.body.author,
  }).then(() => {
    res.redirect("/lists");
  });
});

router.put("/:id", (req, res) => {
  Book.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((newBook) => {
    res.status(200).json(newBook);
  });
  res.render("lists");
});

// deletes a book
router.delete("/:id", (req, res) => {
  console.log("delete route");
  Book.destroy({
    where: {
      book_id: req.params.id,
    },
  }).then((removeBook) => {
    res.status(200).json(removeBook);
  });
});

module.exports = router;
