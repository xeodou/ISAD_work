SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS card;

CREATE TABLE card (
	id varchar(50) NOT NULL, 
	name varchar(100) default NULL, 
	sex varchar(100) default NULL,
	class_name varchar(100),
	card_stat int(10) default 1, 
	post_date datetime default NULL, 
	PRIMARY KEY (id)

)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO card set id='3080703143', name = '李晓东', sex = '男', class_name = '计算机', card_stat = '1', post_date ='2011-12-08 02:08:10';
INSERT INTO card set id='3080703118', name = '李东', sex = '男', class_name = '计算机', card_stat = '0', post_date = '2011-12-08 02:08:10';
INSERT INTO card set id='3080703110', name = '李晓', sex = '男', class_name = '管理系', card_stat = '1', post_date = '2011-12-08 02:08:10';
INSERT INTO card set id='3080703138', name = '晓东', sex = '男', class_name = '计算机科学与信息学院', card_stat = '0', post_date = '2011-12-08 02:08:10';
INSERT INTO card set id='3080703111', name = '李东', sex = '男', class_name = '计算机', card_stat = '0', post_date ='2011-12-08 02:08:10';
INSERT INTO card set id='3080703114', name = '李晓东', sex = '男', class_name = '计算机', card_stat = '1', post_date ='2011-12-08 02:08:10';
INSERT INTO card set id='3080703116', name = '东', sex = '男', class_name = '计算机', card_stat = '1', post_date = '2011-12-08 02:08:10';


