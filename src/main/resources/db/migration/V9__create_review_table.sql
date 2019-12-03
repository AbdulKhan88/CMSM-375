CREATE TABLE review (
review_id BIGINT(30) AUTO_INCREMENT PRIMARY KEY,
screw_id bigint(30),
user_email VARCHAR(100),
content VARCHAR(255),
FOREIGN KEY (screw_id) REFERENCES screw(id));


