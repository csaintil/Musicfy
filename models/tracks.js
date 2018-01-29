const db = require("../db/app.js");
const tracks ={};

tracks.create = (req, res, next) => {
  db
    .none(
      "INSERT INTO tracks (artistName, trackName, country, primaryGenreName, price) VALUES ($1, $2, $3, $4c) RETURNING id;",
      [
        req.body.artistName,
        req.body.trackName,
        req.body.country,
        req.body.primaryGenreName,
        req.body.price
      ]
    )
    .then(data => {
      res.locals.newtrackId = data.id;
      next();
    })
    .catch(error => {
      console.log("error encountered in beers.create. Error:", error);
      next(error);
    });
};

module.exports = tracks;