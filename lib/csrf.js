exports.token = function(req, res) {
  if(req.session.csrf == null) {
      req.session.csrf = '' + new Date().getTime() + Math.random();
  }
  return req.session.csrf;
};


exports.check = function() {
  return function(req, res, next) {
    if (!req.xhr && req.body && req.method.toLowerCase() === 'post') {
      var session_csrf = req.session.csrf;
      req.session.csrf = null;
      if (req.body.csrf !== session_csrf) {
        return res.send("Cross-site request forgery attempt discovered!", 403);
      }
    }
    return next();
  };
};
