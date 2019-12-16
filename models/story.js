'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    url: DataTypes.STRING,
    source: DataTypes.STRING,
    data: DataTypes.TEXT
  }, {
    tableName: "Stories"
  });
  Story.associate = function(models) {
    Story.belongsTo(models.User,{ foreignKey: 'userId'})
  };
  return Story;
};