const User = require("./User");
const Book = require("./Book");
const List = require("./List");
const Review = require("./Review");

// User to List
List.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Book, List, Review };
