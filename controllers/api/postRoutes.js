const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  Post.create(req.body).then((createPost) => {
    res.status(200).json(createPost);
  }).then(() => {
      res.redirect('/')
    })
    });

router.put("/:id", withAuth, (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatePost => {
      res.status(200).json(updatePost)
    })
});

router.put('/', (req, res) => {
  res.redirect('/posts');
  return;
});

router.delete("/:id", withAuth, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then(deletePost => {
      res.status(200).json(deletePost)
      res.render('/')
    })
});

module.exports = router;
