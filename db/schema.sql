DROP DATABASE IF EXISTS giftune_db;

CREATE DATABASE giftune_db;

\c giftune_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    email VARCHAR(255) NOT NULL
);
INSERT INTO users(user_name, dob, email) VALUES
('Akira', 'Akira', 'Brown', '1998-12-21', 'akira@email.com'),
('Chantal', 'Chantal', 'Gomez', '1999-05-13', 'chantal@email.com'),
('Onyx', 'Onyx', 'McQueen', '1997-01-06', 'onyx@email.com'),
('Naomi', 'Naomi', 'Pate', '1994-09-10', 'naomi@email.com'),
('Mussie', 'Mussie', 'Russom','1989-02-27', 'mussie@email.com');


DROP TABLE IF EXISTS friends_list;
CREATE TABLE friends_list (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id),
    friends_id INTEGER REFERENCES users(id)
);
INSERT INTO friends_list(user_id, friends_id) VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 1),
(2, 3),
(2, 4),
(2, 5),
(3, 1),
(3, 2),
(3, 4),
(3, 5),
(4, 1),
(4, 2),
(4, 3),
(4, 5),
(5, 1),
(5, 2),
(5, 3),
(5, 4);


DROP TABLE IF EXISTS wishlist;
CREATE TABLE wishlist (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id),
    item_name VARCHAR(255),
    link VARCHAR(255)
);

DROP TABLE IF EXISTS notifications;
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id),
    messages TEXT
);
