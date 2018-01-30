const tracksRouter = require("express").Router();
const tracks = require("../models/tracks.js");
const artists = require('../models/artists.js');
const auth = require('../services/auth');


tracksRouter.get('/saveSongs', tracks.getAll,(req,res)=> {
  res.render('artists/saveSongs', { tracksData :res.locals.alltracksData})
})

tracksRouter.get('/track', (req,res) => {
  // console.log('we are int the newTrack html here' + "+++++++++++++++++++++++++++++++++++++");
  // console.log(res.locals.searchData);
  res.render("tracks/track",res.locals.searchData);
});
tracksRouter.post("/", tracks.create,(req, res, next)=> {
  res.json({id: res.locals.newtrackId, body: req.body})
})


// tracksRouter.delete('/saveSongs', tracks.destroy, (req,res,next)=> {
//   res.json(res.params.trackId)
// })

module.exports = tracksRouter;