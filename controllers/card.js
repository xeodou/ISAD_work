var config = require('../config'), db = config.db;

exports.index = function(req, res, next){
    db.query('select * from card order by id asc', function(err, rows){
		if(err) return next(err);
		res.render('index', {cards: rows});
    });
};

exports.new = function (req, res, next){
	var id = req.body.id;
	id = id.trim();
	var name = req.body.name;
	name = name.trim();
	var sex = req.body.sex;
	sex = sex.trim();
	var class_name = req.body.class_name;
	class_name = class_name.trim();
	var card_stat = req.body.card_stat;
	card_stat = card_stat.trim();
	if(!id || !name || !sex || !class_name || !card_stat){
	    return res.render('error', {message: '输入错误'});
    }
    db.query('insert into card set id=?, name=? , sex=?, class_name=?, card_stat=?, post_date=now()',[id, name, sex, class_name, card_stat], function(err, result){
		if(err) return next(err);
		res.redirect('/');
    });
}; 

exports.search = function(req, res, next){
	 var id = req.body.id;
	 id = id.trim();
	 if(!id){
		 return res.render('error', {message: '输入错误'});
	 }
	 db.query('select * from card where id=?', [id], function(err, row){
		if(err) return next(err);
		res.render('index', {cards: row});
	 });
};

exports.report = function(req, res, next){
	var	id = req.body.id;
	id = id.trim();
	if(!id){
		return res.render('error', {message: '输入错误'})
	}
	db.query('update card set card_stat = 0 where id=?',[id], function(err, result){
		if(err) return next(err);
		res.render('error', {message: '挂失成功'});
	});
};
		   
exports.manage = function(req, res, next){
	var id = req.body.id;
	id = id.trim();
	var card_stat = req.body.card_stat;
	card_stat = card_stat.trim();
	db.query('update card set card_stat = ? where id = ?',[card_stat,id],function(err, result){
		if(err) return next(err);
		res.redirect('/');
	});
};

