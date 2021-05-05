USE bookblog_db;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) DEFAULT NULL,
  email VARCHAR(30) DEFAULT NOT NULL,
  userpass VARCHAR (30) DEFAULT NOT NULL,

  PRIMARY KEY (id)
  /*
  timestamps: true,
  freezeTableName: true,
  */
);

CREATE TABLE list (
  id INT NOT NULL AUTO_INCREMENT,
  list_name VARCHAR(30) NULL,
  user VARCHAR(30) DEFAULT NULL,


  PRIMARY KEY (id),
  FOREIGN KEY (user) REFERENCES user(id),
);

CREATE TABLE content (
  list_id INT NOT NULL,
  book_id INT NOT NULL,
  shelf_position INT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (list_id) REFERENCES list(id),
  FOREIGN KEY (book_id) REFERENCES book(id)
);

CREATE TABLE book (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  author VARCHAR(30) NOT NULL,
  cover_url VARCHAR DEFAULT NULL, 
  genre VARCHAR(20) DEFAULT NULL,
  summary TEXT DEFAULT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE review (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(30) DEFAULT NULL,
  book_id INT NOT NULL,
  rating INT DEFAULT NULL,
  comment TEXT DEFAULT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (user) REFERENCES user(id),
  FOREIGN KEY (book_id) REFERENCES book(id)
  /*
  timestamps: true,
  freezeTableName: true,
  */
);