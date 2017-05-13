CREATE TABLE IF NOT EXISTS  `finance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stu_id` int(11) NOT NULL,
  `should_pay` int(11) DEFAULT NULL,
  `pay` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
    `teacher_sign` varchar(255) DEFAULT NULL,
   `create_time` DATE DEFAULT NULL,
  PRIMARY KEY (`id`),
  foreign key(stu_id) references student(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

