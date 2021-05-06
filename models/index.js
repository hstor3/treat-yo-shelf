const User = require("./User");
// const Post = require("./Post");
const Book = require("./Book")
const Comment = require("./Comment");

// User.hasMany(Post, {
//   foreignKey: "userPostId",
//   onDelete: "CASCADE",
// });

User.hasMany(Comment, {
  foreignKey: "userCommentId",
  onDelete: "CASCADE",
});

User.hasMany(Book, {
  foreignKey: "userBookId",
  onDelete: "CASCADE",
});

// Post.hasMany(Comment, {
//   foreignKey: "postCommentId",
//   onDelete: "CASCADE",
// });

// Post.belongsTo(User, {
//   foreignKey: "postUserId",
// });

// Comment.belongsTo(User, {
//   foreignKey: "commentUserId",
// });

// Comment.belongsTo(Post, {
//   foreignKey: "commentPostId",
// });

Comment.belongsTo(Book, {
  foreignKey: "commentBookId",
  onDelete: "CASCADE"
});

Book.hasMany(Comment, {
  foreignKey: "bookCommentId",
  onDelete: "CASCADE"
});

// Book.belongsToMany(User, {
//   foreignKey: "bookUserId",
//   onDelete: "CASCADE"
// });

module.exports = {
  User,
  // Post,
  Comment,
  Book
};
