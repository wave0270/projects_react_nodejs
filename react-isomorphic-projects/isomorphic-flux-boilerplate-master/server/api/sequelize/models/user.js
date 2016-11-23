"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    salt: DataTypes.STRING,
    md5: DataTypes.STRING,
    sha1: DataTypes.STRING,
    sha256: DataTypes.STRING,
    registered: DataTypes.STRING,
    dob: DataTypes.STRING,
    phone: DataTypes.STRING,
    cell: DataTypes.STRING,
    picture: DataTypes.STRING,
    nationality: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  });

  return User;
};
