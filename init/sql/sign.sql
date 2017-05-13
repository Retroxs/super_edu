
CREATE TABLE IF NOT EXISTS  `sign` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stu_id` int(11) NOT NULL,
  `sign` varchar(255) DEFAULT NULL,
   `create_time` DATE DEFAULT NULL,
  PRIMARY KEY (`id`),
  foreign key(stu_id) references student(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
