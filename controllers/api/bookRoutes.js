const router = require("express").Router();
const { Book, Review } = require("../../models");

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
router.get('/books/:id', async (req, res) => {
  const bookData = await Book.findByPk(req.params.id, {
    include: [
      {
        model: Book,
        attributes: ['id'],
      },
    ],
  });

  const book = bookData.get({ plain: true });

})

// adds book to database
router.post('/', (req, res) => {
  Book.create({
    title: req.body.title,
    author: req.body.author,
  }).then(() => {
    res.redirect('/lists')
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

router.get('/:id/reviews', (req, res) => {
  res.render('reviews', {
    loggedIn: req.session.loggedIn
  })
});

// finds reviews by pk
router.get('/:id/reviews', (req, res) => {
  console.log('get review route')
  const reviewData = Review.findByPk(req.params.id, {
    include: [
      {
        model: Book,
        attributes: ['id'],
      },
    ],
  });
  const review = reviewData.get({ plain: true });
  res.render('reviews', {
    review,
    loggedIn: req.session.loggedIn
  })
});

// this route works and saves reviews to database
router.post('/:id/reviews', (req, res) => {
  console.log('create review route')
  console.log(req.body);
  console.log(req.params)
  console.log(req.session)

  Review.create({
    body: req.body.review,
    bookId: req.params.id,
    user_id: req.session.userId,
  }).then(() => {
    console.log(req.body)
    res.redirect('/lists')
  })
});

// if we had a delete button for reviews and more time
router.delete('/:id/reviews', (req, res) => {
  console.log('destroyyyyy the review!!!')
  Review.destroy({
    where: {
      id: req.params.id,
    },
  }).then(destroyReview => {
    res.status(200).json(destroyReview)
    res.render('/lists')
  })
});

module.exports = router;