'use strict';
const {
  Model
} = require('sequelize');

const picture = require('../attachments')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      models.PostTypes.hasMany(models.Post);
      models.Post.belongsTo(models.PostTypes);

      models.Status.hasMany(models.Post);
      models.Post.belongsTo(models.Status);
    }
  };
  Post.init({
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    location: DataTypes.STRING,
    petName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};