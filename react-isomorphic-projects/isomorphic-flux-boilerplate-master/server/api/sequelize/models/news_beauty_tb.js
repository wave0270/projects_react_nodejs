"use strict";

module.exports = function(sequelize, DataTypes) {
  var news_beauty_tb = sequelize.define("news_beauty_tb", {
    title: DataTypes.STRING,
    domain: DataTypes.STRING,
    key: DataTypes.STRING,
    content: DataTypes.STRING,
    href: DataTypes.STRING,
    desc: DataTypes.STRING,
    image_full: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    click_num: DataTypes.INTEGER,
    create_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return news_beauty_tb;
};
