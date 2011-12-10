
var express = require('express')
  , ejs = require('ejs')
  , config = require('./config')
  , card = require('./controllers/card')
  , csrf = require('./lib/csrf');

var app = express.createServer();
app.use(express.static(__dirname + '/public', {maxAge: 3600000 * 24 * 30}));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({
    secret: config.session_secret
}));

app.use(csrf.check());
app.dynamicHelpers({
	csrf: csrf.token
});
app.helpers({
	config: config
});

app.set("view engine", "html");
app.set("views", __dirname + '/views');
app.register("html", ejs);

app.get('/', card.index);
app.get('/cardnew', function(req, res){ res.render('newcard'), null});
app.post('/cardnew', card.new);
app.get('/cardsearch', function(req, res){ res.render('search'), null});
app.post('/cardsearch', card.search);
app.get('/cardreport', function(req, res) { res.render('report'), null});
app.post('/cardreport', card.report);
app.post('/manage',card.manage);

app.listen(config.port);

console.log('server start http://localhost: ' + config.port);