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
      console.log("error encountered in tracks.create. Error:", error);
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
tracks.findById = (req, res, next)=> {
  db.one("SELECT*FROM tracks WHERE id = $1",
    [req.params.id])
  .then(data => {
    res.locals.trackData = data;
    next();
  }) .catch(error => {
      console.log("error encountered in tracks.getAll. Error:", error);
      next(error);
    });

}


tracks.destroy = (req, res, next) => {
  db
    .none("DELETE FROM tracks WHERE id = $1", [req.params.id])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error encountered in tracks.destroy. error:", error);
      next(error);
    });
};



tracks.update = (req, res, next) => {
  console.log('in update function')
  db
    .one(
      "UPDATE tracks SET artistName = $1, trackName = $2, country = $3, primaryGenreName = $4, price = $5 WHERE id = $6 RETURNING *;",
      [
        req.body.artistName,
        req.body.trackName,
        req.body.country,
        req.body.primaryGenreName,
        req.body.price,
        req.params.trackId
      ]
    )
    .then(data => {
      res.locals.upToDateTrackData = data;
      next();
    })
    .catch(error => {
      console.log("error encountered in tracks.create. Error:", error);
      next(error);
    });
};

module.exports = tracks;