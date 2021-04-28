const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.update({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!postData) {
      res.status(404).json({
        message: "No post found with this id!",
      });

      return;
    }

    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!postData) {
      res.status(404).json({
        message: "No post found with this id!",
      });

      return;
    }

    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
