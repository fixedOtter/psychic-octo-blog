//
// made by fixedOtter on 7.8.2022
//

/* imported goods */
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { engine } = require('express-handlebars');
const path = require('path');
const db = require('./config/connection');
const { authRoutes, renderRoutes } = require('./controllers');

// getting app from express and setting port
const app = express();
const PORT = process.env.PORT || 6969;

// main express settings for sending public folder, getting more data from fontend, & setting view engine
app.use(express.static(path.join('public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// setting express session data
app.use(session({
  secret: 'i am not from earth originally',
  store: new SequelizeStore({ db }),
  // saveUninitialized: false,
  // resave: false
}))



app.use('/', renderRoutes);
app.use('/auth', authRoutes);

// sync sequelize models to the database, then turn on the server
db.sync().then(() => {
  app.listen(PORT, () => { console.log(`I can hear you on port: ${PORT}`)});
});
