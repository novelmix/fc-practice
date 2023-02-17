'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({Hero}) {
      this.belongsTo(Hero, {
        foreignKey: 'heroId'
      });
    }
  }
  Image.init(
    {
      imagePath: {
        field: 'image_path',
        type: DataTypes.STRING,
      },
      heroId: {
        field: 'hero_id',
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'heroes',
            key: 'id'
          }
        }
      },
    },
    {
      sequelize,
      timestamps:true,
      underscored:true,
      modelName: 'Image',
      tableName: 'images'
    }
  );
  return Image;
};
