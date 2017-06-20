DROP TABLE IF EXISTS beers;

CREATE TABLE beers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  country VARCHAR(255),
  alcohol VARCHAR(255),
  price VARCHAR(255)
);
