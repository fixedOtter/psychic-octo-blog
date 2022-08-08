exports.loginChecker = (req, res, next) => {
  const user_id = req.session.user_id;

  const currRoute = req.path;

  switch (currRoute) {
      case '/register':
          if (user_id) {
            return res.redirect('/dashboard');
          }
      case '/login':
          if (user_id) {
            return res.redirect('/dashboard');
          }
      case '/dashboard':
          if (!user_id) {
            return res.redirect('/');
          }
      default:
  }
  next();
}