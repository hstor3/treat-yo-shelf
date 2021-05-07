const router = require("express").Router();
const { Book } = require("../../models");

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

router.post("/", (req, res) => {
  // console.log(req);
  Book.create({
    title: req.body.title,
    author: req.body.author,
  }).then((addBook) => {
    res.status(200).json(addBook);
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

router.delete("/:id", (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id,
    },
  }).then((removeBook) => {
    res.status(200).json(removeBook);
    res.render("lists");
  });
});

module.exports = router;
