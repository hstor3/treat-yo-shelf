const User = require("./User");
const Book = require("./Book");
const Content = require("./Content");
const List = require("./List");
const Review = require("./Review");

// User to List
List.belongsTo(User, {
  foreignKey: 'user_id',
});

// User to Review
Review.belongsTo(User, {
  foreignKey: 'user_id',
});

// List to Content
Content.belongsTo(List, {
  foreignKey: 'list_id',
});

// Content to Book
Content.hasMany(Book, {
  foreignKey: 'book_id',
})

// Book to Review
Book.hasMany(Review, {
  foreignKey: 'review_id',
});

module.exports = { User, Book, Content, List, Review };