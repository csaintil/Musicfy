const db = require("../db/app.js");

const axios = require("axios");

const artists = {};



artists.all = (req, res, next) => {
  // const input = req.query.term;
  
    // console.log(req.params.artistName + "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
 const artistName = req.query.artistName;
  axios({
    method: "GET",
    url: `https://itunes.apple.com/search?term=${artistName}`
  })
    .then(response => {
      res.locals.searchData = response.data;
      // console.log(res.locals.searchData + "++++++++++++++++++++++++++++++++++++++++++++++++++++++");
      next();
    })
    .catch(err => {
      console.log("error encountered in Trains.showTrain. error: ", err);
    });
};

module.exports = artists;
