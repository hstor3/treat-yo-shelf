/* eslint-disable require-atomic-updates */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userpass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },

  // ! TODO: link models
  User.associate = models => {
    User.hasMany(models.orders, {
      onDelete: 'cascade'
    })
    User.hasMany(models.cart_items, {
      foreignKey: { name: 'UserId', allowNull: false },
      onDelete: 'cascade'
    })
  } //! TODO: add comma? 

  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: true,
    // freezeTableName: true,
    modelName: "User",
  }
);

module.exports = User;