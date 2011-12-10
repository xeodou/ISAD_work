exports.port = 8080;
exports.site_name = '校园卡挂失管理信息系统';
exports.site_desc = '';
exports.session_secret = 'tsoedsosisession_secretonsheecfrxedta';

var db_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test'
};

var mysql = new require('mysql'), db = null;
if(mysql.createClient) {
    db = mysql.createClient(db_options);
} else {
    db = new mysql.Client(db_options);
    db.connect(function(err){
	if(err){
	    console.error('connect db ' + db.host + ' error: ' + err);
	    process.exit();
	}
    });
}
console.log('connect db ' + db.host + ' success');
exports.db = db;