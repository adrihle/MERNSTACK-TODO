CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEAULT CURRENT_TIMESTAMP,
    author VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;