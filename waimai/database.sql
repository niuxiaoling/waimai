DROP TABLE IF EXISTS goods;
CREATE TABLE goods(
  id  INT (12)  PRIMARY KEY  AUTO_INCREMENT,
  name  VARCHAR (255)
)DEFAULT CHARSET=utf8;
INSERT  into  goods(name)
VALUES
('冰冰1'),('冰冰2');