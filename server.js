var express = require('express'),
	app = express(),
	expressLayouts = require('express-ejs-layouts'),
	session = require('express-session'),
	bodyParser = require('body-parser');


var loginModule = require('./modules/login')(app);

app.set('view engine', 'ejs');
app.set('layout', 'layout.ejs');

app.use(expressLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/bootstrap", express.static(__dirname + '/bootstrap'));
app.use("/css", express.static(__dirname + '/css'));


app.get('/', loginModule.verificaUsuarioLogado, function(req, res){
	res.send('home');
});


var server = app.listen(3000, function(){
	console.log('Servidor iniciado na porta %d', server.address().port);
});


/*
 Parâmetros no GET:
 app.get('/page/:param/:param', function(req, res){
	var username = req.params.username;
 })
*/

// login
// http://stackoverflow.com/questions/7990890/how-to-implement-login-auth-in-node-js/8003291#8003291
// http://stackoverflow.com/questions/5924072/express-js-cant-get-my-static-files-why
// http://stackoverflow.com/questions/4529586/render-basic-html-view-in-node-js-express
// http://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
// http://stackoverflow.com/questions/9177049/express-js-req-body-undefined
// http://stackoverflow.com/questions/23033473/error-most-middleware-like-json-is-no-longer-bundled-with-express-and-must-be
// function checkAuth(req, res, next) {
//   if (!req.session.user_id) res.send('Faça login para continuar');
//   else next();
// }