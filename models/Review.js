// /* eslint-disable require-atomic-updates */

// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Review extends Model {}

// Review.init(
//   {
//     review_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       autoIncrement: true,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     book_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     // rating: {
//     //   type: DataTypes.INTEGER,
//     // },
//     // comment: {
//     //   type: DataTypes.TEXT,
//     // },
//     body: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     timestamps: true,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "Review",
//   }
// );

// module.exports = Review;
