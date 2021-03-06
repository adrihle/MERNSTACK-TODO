CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    author VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT,
    postid INT(100) NOT NULL,
    description TEXT NOT NULL,
    author VARCHAR(50) NOT NULL,
    created_at DATETIME DEAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)  ENGINE=INNODB;