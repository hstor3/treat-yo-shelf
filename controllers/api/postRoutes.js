// const router = require("express").Router();
// const { Post } = require("../../models");
// const withAuth = require("../../utils/auth");

// router.get('/search/:id/comments', withAuth, async (req, res) => {
//   res.render('search', {
//     loggedIn: req.session.loggedIn
//   })
// });

// router.get('search/comments/:id', async (req, res) => {
//   const commentContent = await Comment.findByPk(req.params.id, {
//     include: [
//       {
//         model: Post,
//         attributes: ['id'],
//       },
//     ],
//   });
//   const comments = commentContent.get({ plain: true });
//   res.render('comments', {
//     comments,
//     loggedIn: req.session.loggedIn
//   })
// });

// router.post('/:id/comment', (req, res) => {
//   Comment.create({
//     body: req.body.body,
//     postId: req.params.id,
//     userId: req.session.userId,
//   }).then((newComment) => {
//     res.status(200).json(newComment)
//   }).then(() => {
//     res.redirect('/')
//   })
// });

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

// module.exports = router;
