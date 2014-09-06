
var verificaUsuarioLogado = function(req, res, next){
	// se não logado
	res.redirect('/login');
	// caso contrário
	// next();
}

var autenticarUsuario = function(usuario, senha){
	return (usuario == 'su' && senha = 'su');
}

// app.get('/logout', function (req, res) {
//   delete req.session.user_id;
//   res.redirect('/login');
// });

module.exports = function (app) {

    app.get('/login', function(req, res){
	var post = req.body;
	console.log(post);
	res.render('login.ejs', { tituloPagina: 'Login'});
// 	if (post.user === 'john' && post.password === 'johnspassword') {
//    	req.session.user_id = johns_user_id_here;
//    	res.redirect('/my_secret_page');
//  	} else {
//    	res.send('Bad user/pass');
//	}
	});
};

exports.verificaUsuarioLogado = verificaUsuarioLogado;