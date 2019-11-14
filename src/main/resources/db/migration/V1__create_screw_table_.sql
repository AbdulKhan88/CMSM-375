CREATE TABLE hibernate_sequence (
  next_val bigint(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (next_val)
);

CREATE TABLE screw (
  id bigint(30) NOT NULL AUTO_INCREMENT,
  access_Id bigint(30) NOT NULL,
  category varchar(50) NOT NULL,
  gauge varchar(50) NOT NULL,
  head_type varchar(50) NOT NULL,
  img_path varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  price DOUBLE(50,2) NOT NULL,
  shaft_len varchar(50) NOT NULL,
  threads_per_inch varchar(50) NOT NULL,
  PRIMARY KEY (id)
);