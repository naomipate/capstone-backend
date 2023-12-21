DROP DATABASE IF EXISTS giftune_db;

CREATE DATABASE giftune_db;

\c giftune_db

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    email VARCHAR(255) NOT NULL
);

INSERT INTO users(user_name, first_name, last_name, dob, email) VALUES
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
    is_bought BOOLEAN NOT NULL,
    item_name VARCHAR(255),
    item_price NUMERIC(10, 2),
    link TEXT
);

INSERT INTO wishlist(user_id, is_bought, item_name, item_price, link) VALUES
(1, false,'keyboard', 40, 'https://www.amazon.com/Computer-Keyboard-Indicators-Spill-Resistant-Anti-Wear/dp/B09NLS9TK4/ref=sr_1_3?keywords=keyboard&qid=1698683098&sr=8-3'),
(1, false,'watch', 22.95, 'https://www.amazon.com/Casio-F108WH-Illuminator-Collection-Digital/dp/B0053HBJBE/ref=sr_1_2?crid=2ZSOX1A7Q9BR8&keywords=watch&qid=1698683161&sprefix=watch%2Caps%2C67&sr=8-2'),
(2, false,'ipad pro', 1265.51, 'https://www.amazon.com/Apple-12-9-inch-iPad-Pro-Wi-Fi-256GB/dp/B0BJLFC67L/ref=sr_1_3?crid=YC0HIFYXGDV7&keywords=ipad+pro&qid=1698683221&sprefix=ipad+pro%2Caps%2C74&sr=8-3&ufe=app_do%3Aamzn1.fos.765d4786-5719-48b9-b588-eab9385652d5'),
(3, false,'legos', 169.99, 'https://www.amazon.com/LEGO-6386348-TBD-Ideas-21333/dp/B09SM828FD/ref=sr_1_5?crid=1T3E00D7AGANB&keywords=legos&qid=1698683290&sprefix=legos%2Caps%2C103&sr=8-5&ufe=app_do%3Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0'),
(4, false,'dress', 76.00, 'https://www.etsy.com/listing/221130185/hooded-tunic-dress-with-thumb-hole?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sr_gallery-1-26&frs=1&bes=1&referrer_page_guid=f730e328f6f.139127ed5b393d61b485.00&organic_search_click=1'),
(5, false,'headphones', 39.95, 'https://www.ebay.com/p/19051992378?iid=394850116603');


DROP TABLE IF EXISTS notifications;
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id),
    messages TEXT,
    sender_id INTEGER REFERENCES users(id),
    sender_name TEXT,
    msg_type TEXT,
    is_read BOOLEAN,
    date_stamp DATE NOT NULL,
    time_stamp TIME NOT NULL
);
INSERT INTO notifications(user_id, messages, sender_id, sender_name, msg_type, is_read, date_stamp, time_stamp) VALUES
(1, 'Has bought an item', 2, 'Chantal', 'purchase', false, '2023-03-21', '16:00:00'),
(2, 'Has bought an item', 4, 'Naomi', 'purchase', false, '2023-03-21', '16:00:00'),
(3, 'Has bought an item', 5, 'Mussie', 'purchase', false, '2023-03-21', '16:00:00'),
(4, 'Has bought an item', 3, 'Onyx', 'purchase', false, '2023-03-21', '16:00:00'),
(5, 'Has bought an item', 1, 'Akira', 'purchase', false, '2023-03-21', '16:00:00');

DROP TABLE IF EXISTS events;
CREATE TABLE events (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id),
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    google_location TEXT NOT NULL
);
INSERT INTO events(user_id, event_date, event_time, google_location) VALUES
(1, '2023-12-21', '14:00:00', '47-10 Austell Pl 2nd floor, Long Island City, NY 11101'),
(2, '2023-12-22', '15:00:00', '350 Fifth Avenue, New York, NY 10118'),
(3, '2023-12-23', '16:00:00', '4 Pennsylvania Plaza, New York, NY 10001'),
(4, '2023-12-24', '17:00:00', 'One World Trade Center, New York, NY 10007'),
(5, '2023-12-25', '18:00:00', '89 E 42nd Street, New York, NY 10017');