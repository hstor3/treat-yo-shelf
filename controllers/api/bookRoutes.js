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

// router.get('/books/:id', async (req, res) => {
//   const bookData = await Book.findByPk(req.params.id, {
//     include: [
//       {
//         model: Book,
//         attributes: ['id'],
//       },
//     ],
//   });

//   const book = bookData.get({ plain: true });

// })

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
  console.log('delete route')
  Book.destroy({
    where: {
      book_id: req.params.id,
    },
  }).then(removeBook => {
    res.status(200).json(removeBook)
  })
})

module.exports = router;