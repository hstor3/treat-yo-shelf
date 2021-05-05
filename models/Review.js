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
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.TEXT
    },
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