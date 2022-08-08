const renderRoutes = require('express').Router();
const { loginChecker } = require('./loginChecker');


renderRoutes.get('/', loginChecker, (req, res) => {
  res.render('index', { username: req.session.username });
});

renderRoutes.get('/login', loginChecker, (req, res) => {
    res.render('sign_in', { errors: req.session.errors });
});

renderRoutes.get('/register', loginChecker, (req, res) => {
    res.render('register', { errors: req.session.errors });
});

renderRoutes.get('/dashboard', loginChecker, (req, res) => {
    res.render('dashboard');
});

module.exports = renderRoutes;