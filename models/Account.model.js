//
// made by fixedOtter 4.8.2022
//

const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

class Account extends Model {} // defining Account as a model

Account.init({
  username: { // username for the user account
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        args: true,
        msg: 'Your username cannot contain weird characters; weirdo.'
      },
      len: {
        args: 3,
        msg: 'Your username must be at least 3 characters!'
      }
    }
  },
  passwerd: { // password hash saver
    type: DataTypes.STRING(6969),
    allowNull: false,
    validate: {
      len: {
        args: 8,
        msg: 'Your password requires at least 8 characters!'
      }
    }
  },
  points: { // had an idea for a shop - maybe we reward wins with x points to use in a store? (NTH!!)
    type: DataTypes.INTEGER
  }
}, {
  sequelize: require('../config/connection'),
  modelName: 'account',
  hooks: {
    beforeCreate: async(newUser) => {
      // passing password to bcrypt to hash before saving
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newUser.passwerd, salt);
      // saving hashed password to user.passHash
      newUser.passwerd = hashedPassword;
    }
  }
});

// returns boolean true ? pass = storedPass : false
Account.prototype.validatePass = async(pass, storedPass) => {await bcrypt.compare(pass, storedPass)};

module.exports = Account;