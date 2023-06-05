DROP DATABASE IF EXISTS bakery_items WITH (FORCE);

CREATE DATABASE bakery_items;

\c bakery_items;

CREATE TABLE sweets (
id SERIAL PRIMARY KEY,
img TEXT,
title TEXT,
price TEXT,
content TEXT,
allergens TEXT,
is_fav BOOLEAN
);