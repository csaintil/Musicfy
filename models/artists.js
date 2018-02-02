const db = require("../db/app.js");

const axios = require("axios");

const artists = {};



artists.all = (req, res, next) => { 
 const artistName = req.query.artistName;
  axios({
    method: "GET",
    url: `https://itunes.apple.com/search?term=${artistName}`
  })
    .then(response => {
      res.locals.searchData = response.data;
      next();
    })
    .catch(err => {
      console.log("error encountered in artits.all error: ", err);
    });
};

module.exports = artists;
