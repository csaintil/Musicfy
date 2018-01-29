const tracksRouter = require("express").Router();
const tracks = require("../models/tracks.js");
const artists = require('../models/artists.js');
const auth = require('../services/auth');


// tracksRouter.get('/newTrack',auth.restrict, artists.all, (req,res) => {
//   console.log('we are int the newTrack html here' + "+++++++++++++++++++++++++++++++++++++");
//   // console.log(res.locals.searchData);
//   res.render('./tracks/track',  res.locals.searchData);
// });


tracksRouter.get('/track', (req,res) => {
  console.log('we are int the newTrack html here' + "+++++++++++++++++++++++++++++++++++++");
  // console.log(res.locals.searchData);
  res.render("tracks/track",res.locals.searchData);
});

tracksRouter.post("/", tracks.create,(req, res, next)=> {
  res.json({id: res.locals.newtrackId, body: req.body})
})

module.exports = tracksRouter;