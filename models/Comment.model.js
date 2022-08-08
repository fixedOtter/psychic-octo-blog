//
// made by fixedOtter 4.8.2022
//

const { DataTypes, Model } = require('sequelize');

class Comment extends Model {} // defining Comment as a model

Comment.init({
  body: { // username for the user Comment
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        args: true,
        msg: 'Your comment cannot contain weird characters; weirdo.'
      }
    }
  },
  points: { // good comment?
    type: DataTypes.INTEGER
  }
}, {
  sequelize: require('../config/connection'),
  modelName: 'comment'
});

// returns boolean true ? pass = storedPass : false
Comment.prototype.validatePass = async(pass, storedPass) => {await bcrypt.compare(pass, storedPass)};

module.exports = Comment;