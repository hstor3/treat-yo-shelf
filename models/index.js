const User = require("./User");
const Book = require("./Book");
const Content = require("./Content");
const List = require("./List");
const Review = require("./Review");

// User to List
User.hasOne(List, {
  //! TODO
});
List.belongsTo(User, {
  foreignKey: 'id',
});

// User to Review
User.hasMany(Review, {
  //! TODO
});
Review.belongsTo(User, {
  foreignKey: 'id',
});

// List to Content
List.hasMany(Content, {
  //! TODO
});
Content.belongsTo(List, {
  foreignKey: 'list_id',
});

// Content to Book
Content.hasMany(Book, {
  foreignKey: 'book_id',
})

// Book to Review
Book.hasMany(Review, {
  //! TODO
});
Review.belongsTo(Book, {
  //! TODO
});

module.exports = { User, Book, Content, List, Review };