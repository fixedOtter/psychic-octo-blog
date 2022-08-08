//
// made by fixedOtter 4.8.2022
//

const { DataTypes, Model } = require('sequelize');

class Article extends Model {} // defining Article as a model

Article.init({
  title: { // title of article
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        args: true,
        msg: 'Your article title cannot contain weird characters; weirdo.'
      }
    }
  },
  body: { // body of article
    type: DataTypes.STRING(6969),
    allowNull: false
  }
}, {
  sequelize: require('../config/connection'),
  modelName: 'article'
});

module.exports = Article;