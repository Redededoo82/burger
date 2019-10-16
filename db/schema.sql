CREATE DATABASE burgers_db;
USE DATABASE burgers_db;
CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false
);