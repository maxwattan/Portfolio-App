DROP DATABASE IF EXISTS bakery_items WITH (FORCE);

CREATE DATABASE bakery_items;

\c bakery_items;

CREATE TABLE sweets (
id SERIAL PRIMARY KEY,
img VARCHAR,
title VARCHAR,
price INTEGER,
content VARCHAR,
allergens VARCHAR,
is_fav BOOLEAN
)