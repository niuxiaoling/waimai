DROP TABLE  IF EXISTS  orders;
CREATE TABLE  orders(
  id  int(12)  PRIMARY  KEY  AUTO_INCREMENT UNIQUE,
  uid  int(12),
  address_id INT(12),
  sid  int(12),
  state INT(12)  DEFAULT 0,
  ctime TIMESTAMP DEFAULT current_timestamp
)DEFAULT  CHARSET=utf8;

INSERT INTO orders(id, uid, address_id, sid, state)
VALUES
  (10000000,1,1,1,0),
  (10000001,1,1,1,0);

 ALTER TABLE orders
      MODIFY id int(12) NOT NULL  AUTO_INCREMENT,AUTO_INCREMENT=10000000;
-- 订单页与商家信息页与地址页关联视图
DROP  VIEW  IF EXISTS order_info;
CREATE VIEW order_info  AS
  SELECT o.*,s.fei,s.name,s.pic,c.name as cname,c.gender,c.address,c.phone
  FROM
    orders as o,store as s,c_user_address as c
  WHERE
    o.sid=s.id AND o.address_id=c.id;

-- 订单与商品的关联表
DROP TABLE  IF EXISTS  order_goods;
CREATE TABLE  order_goods(
  id  INT(12)  PRIMARY  KEY  AUTO_INCREMENT,
  oid INT(12),
  gid INT(12),
  num INT(12)
)DEFAULT  CHARSET=utf8;

DROP VIEW IF EXISTS choice_goods;
CREATE VIEW choice_goods AS
  SELECT o.*,g.name,g.price FROM order_goods as o,goods as g
  WHERE  o.gid=g.id;

INSERT INTO order_goods(id, oid, gid, num)
VALUES
  (1,10000000,1,4),
  (2,10000000,5,4),
  (3,10000000,2,4),
  (4,10000001,4,4),
  (5,10000001,2,4),
  (6,10000001,3,4);

DROP TABLE  IF EXISTS  c_user_address;
CREATE TABLE  c_user_address(
  id  int(12)  PRIMARY  KEY  AUTO_INCREMENT,
  uid  int(12),
  name VARCHAR (255) ,
  address VARCHAR(255),
  gender  VARCHAR(255),
  label  VARCHAR(255),
  phone  VARCHAR (255),
  is_default INT(12)  DEFAULT 0
)DEFAULT  CHARSET=utf8;

INSERT INTO c_user_address(id, uid, name, address, gender, label, phone, is_default)
VALUES
  (1,1,'小冰冰','大马','先生','家','12345678903',1);

INSERT  into c_user_address(uid,name, address, gender, label, phone)
VALUES
  (1,'王小明','美国大同','先生','家',123456778);


DROP TABLE  IF EXISTS  c_user;
CREATE TABLE  c_user(
  id  int(12)  PRIMARY  KEY  AUTO_INCREMENT,
  account VARCHAR (255) UNIQUE,
  pass  VARCHAR (255),
  pic  VARCHAR(255)
)DEFAULT  CHARSET=utf8;

INSERT  into c_user(account,pass)
VALUES
  ('12345678903','8888');

DROP TABLE  IF EXISTS  user;
CREATE TABLE  user(
  id  int(12)  PRIMARY  KEY  AUTO_INCREMENT,
  name VARCHAR (255) UNIQUE,
  company_name VARCHAR(255),
  number  VARCHAR(255),
  pic  VARCHAR(255),
  pass  VARCHAR (255)
)DEFAULT  CHARSET=utf8;

DROP TABLE  IF EXISTS  store;
CREATE TABLE  store(
  id  int(12)  PRIMARY  KEY  AUTO_INCREMENT,
  uid int(12),
  name VARCHAR (255),
  fei  VARCHAR (255),
  qisong VARCHAR (255),
  message VARCHAR (255),
  info  VARCHAR (255),
  pic   VARCHAR (255),
  lables VARCHAR (255),
  pos   VARCHAR(255)
)DEFAULT  CHARSET=utf8;

INSERT INTO store(id,uid,name,fei,qisong,message,info,pic,lables,pos)
VALUES
(1,1,'兔子星球主食沙拉',3,40,'全部3折','满30减5，满60减8，满130减20','static/public/img/1.png','蜂鸟,2-分钟送达','山西太原'),
(2,2,'米乐星',3,40,'全部3折','满30减5，满60减8，满130减20','static/public/img/1.png','蜂鸟,2-分钟送达','日本');


DROP TABLE  IF EXISTS  categories;
CREATE TABLE  categories(
  id  int(12)  PRIMARY  KEY  AUTO_INCREMENT,
  sid int(12),
  name VARCHAR (255)
)DEFAULT  CHARSET=utf8;

INSERT  into categories (id,sid,name)
VALUES
(1,1,'优惠'),
(2,1,'一人食'),
(3,1,'做罐沙拉');



DROP TABLE  IF EXISTS  goods;
CREATE TABLE  goods(
  id  int(12)  PRIMARY  KEY  AUTO_INCREMENT,
  sid int(12),
  name VARCHAR (255),
  cid int(12),
  info VARCHAR (255),
  price VARCHAR (255),
  pic VARCHAR (255)
)DEFAULT  CHARSET=utf8;

INSERT into goods (id,sid,name,cid,info,price,pic)
VALUES
(1,1,'金枪鱼紫薯泥',1,'罗马生菜 烤培根 烤鸡胸 烤面包丁 鹌鹑蛋',12,'...'),
(2,1,'酸奶紫薯泥',1,'牛油果 核桃 鹰嘴豆 混合生菜 樱桃番茄',13,'...'),
(3,1,'轻体能量套餐',2,'鸡胸肉 土豆 鸡蛋 花椰菜 胡萝卜 樱桃萝卜 青豆 玉米 日式和风酱 ',16,'...'),
(4,1,'金枪鱼紫薯泥',2,'罗马生菜 烤培根 烤鸡胸 烤面包丁 鹌鹑蛋',15,'...'),
(5,1,'金枪鱼尼斯风沙拉套餐',3,'罗马生菜 烤培根 烤鸡胸 烤面包丁 鹌鹑蛋',45,'...'),
(6,1,'秘制辣根酱',3,'罗马生菜 烤培根 烤鸡胸 烤面包丁 鹌鹑蛋',50,'...');

