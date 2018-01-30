const db = require("../db/app.js");
const tracks ={};

tracks.create = (req, res, next) => {
  db
    .one(
      "INSERT INTO tracks (artistName, trackName, country, primaryGenreName, price) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [
        req.body.artistName,
        req.body.trackName,
        req.body.country,
        req.body.primaryGenreName,
        req.body.price
      ]
    )
    .then(data => {
      res.locals.trackData = data;
      next();
    })
    .catch(error => {
      console.log("error encountered in beers.create. Error:", error);
      next(error);
    });
};


tracks.getAll = (req,res,next) => {
    db
    .manyOrNone("SELECT*FROM tracks")
    .then(data => {
      res.locals.alltracksData = data;
      next();
    })
    .catch(error => {
      console.log("error encountered in tracks.getAll. Error:", error);
      next(error);
    });
};


tracks.destroy = (req, res, next) => {
  db
    .none("DELETE FROM tracks WHERE id = $1", [req.params.beerId])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error encountered in beers.destroy. error:", error);
      next(error);
    });
};



tracks.update = (req, res, next) => {
  db
    .one(
      "UPDATE tracks SET artistName = $1, trackName = $2, country = $3, primaryGenreName = $4, price = $5 WHERE id = $6 RETURNING *;",
      [
        req.body.artistName,
        req.body.trackName,
        req.body.country,
        req.body.primaryGenreName,
        req.body.price
      ]
    )
    .then(data => {
      res.locals.trackData = data;
      next();
    })
    .catch(error => {
      console.log("error encountered in beers.create. Error:", error);
      next(error);
    });
};

module.exports = tracks;