
//Auth Object
var Auth = {
  //Memeriksa Apakah User sudah login atau belum
  check_login: function(req, res, next)
  {
    if (!req.session.logged_in) {
      return res.redirect('/login');
    }
    next();
  },
  is_admin: function(req, res, next)//apakah user yang login adalah admin atau bukan.
  {
    if (!req.session.admin) {
      req.flash('info', 'Maaf anda tidak bisa mengakses halaman ini');
      return res.redirect('/');

    }
    next();
  },
};


module.exports = Auth;
