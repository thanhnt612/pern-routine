CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    title VARCHAR(255),
    vote interger NOT NULL DEFAULT 0
);