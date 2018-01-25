\c auth_beer_list_lab

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  counter INTEGER -- totally optional, just here to demonstrate that we can have other columns in users
);

DROP TABLE IF EXISTS beers;

CREATE TABLE beers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  country VARCHAR(255),
  alcohol VARCHAR(255),
  price VARCHAR(255)
);

DROP TABLE IF EXISTS users_beers;

CREATE TABLE users_beers (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  beer_id INTEGER REFERENCES beers
);