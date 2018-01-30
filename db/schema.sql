\c musicfy
DROP TABLE IF EXISTS users_tracks;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tracks;


CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL
  -- counter INTEGER -- totally optional, just here to demonstrate that we can have other columns in users
);





CREATE TABLE tracks (
  id SERIAL PRIMARY KEY,
  artistName VARCHAR(255),
  trackName VARCHAR(255),
  country VARCHAR(255),
  primaryGenreName VARCHAR(255),
  price INTEGER
  
);


CREATE TABLE users_tracks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  tracks_id INTEGER REFERENCES tracks
);