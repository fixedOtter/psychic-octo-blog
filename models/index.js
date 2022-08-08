const Account = require('./Account.model');
const Article = require('./Article.model');
const Comment = require('./Comment.model');

Account.hasMany(Article);
Article.belongsTo(Account);

Article.hasMany(Comment);
Comment.belongsTo(Article);

module.exports = {
  Account,
  Article,
  Comment
};
