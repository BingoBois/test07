DROP DATABASE IF EXISTS test07;
CREATE DATABASE test07;
USE test07;
DROP TABLE IF EXISTS creditcards;
DROP TABLE IF EXISTS accounts;
CREATE TABLE accounts (
    id INT NOT NULL AUTO_INCREMENT,
    balance FLOAT(22),
    PRIMARY KEY (id)
);

CREATE TABLE creditcards (
    id INT NOT NULL AUTO_INCREMENT,
    pincode INT NOT NULL,
    created VARCHAR(255) NOT NULL,
    last_used VARCHAR(255),
    attempts INT NOT NULL,
    blocked BOOLEAN NOT NULL,
    fk_account INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (fk_account) REFERENCES accounts(id)
);
INSERT INTO accounts (balance) VALUES(200);