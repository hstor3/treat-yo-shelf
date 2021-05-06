const router = require("express").Router();
const { Book } = require("../../models");
const withAuth = require("../../utils/auth");

// router.get('/search/:id/comments', withAuth, (req, res) => {
//   res.render('lists', {
//     loggedIn: req.session.loggedIn
//   })
// });

// router.get('search/comments/:id', async (req, res) => {
//   const commentContent = await Comment.findByPk(req.params.id, {
//     include: [
//       {
//         model: Book,
//         attributes: ['id'],
//       },
//     ],
//   });
//   const comments = commentContent.get({ plain: true });
//   res.render('lists', {
//     comments,
//     loggedIn: req.session.loggedIn
//   })
// });

router.post('/', (req, res) => {
  console.log(req);
  Book.create({
    title: req.body.title,
    author: req.body.author
  }).then((addBook) => {
    res.status(200).json(addBook)
  })
  //   include: [
  //     {
  //       model: Book,
  //       attributes: ['id'],
  //     },
  //   ],
  // });
  // const book = bookData.get({ plain: true });
  // res.render('lists', {
  //   book,
  //   loggedIn: req.session.loggedIn
  // })
});

// router.post('/', (req, res) => {
//   Comment.create({
//     body: req.body.body,
//     title: req.body.title,
//     userId: req.session.userId
//   }).then((createPost) => {
//     res.status(200).json(createPost);
//   })
// });

// router.put("/:id", (req, res) => {
//   Post.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   }).then(updatePost => {
//       res.status(200).json(updatePost)
//     })
// });

// router.put('/', (req, res) => {
//   res.redirect('/posts');
//   return;
// });

// router.delete('/:id', (req, res) => {
//     Post.destroy({
//       where: {
//         id: req.params.id,
//       },
//     }).then(deletePost => {
//       res.status(200).json(deletePost)
//       res.render('/')
//     })
// });

module.exports = router;
