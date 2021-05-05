/* eslint-disable require-atomic-updates */

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model { }

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    book: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.TEXT
    },

    FOREIGN KEY(user) REFERENCES user(id),
    FOREIGN KEY(book) REFERENCES book(id)

  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    // underscored: true,
    modelName: "Review",
  }
);

module.exports = Review;
