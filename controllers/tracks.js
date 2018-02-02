const tracksRouter = require("express").Router();
const tracks = require("../models/tracks.js");
const artists = require('../models/artists.js');
const auth = require('../services/auth');


tracksRouter.get('/saveSongs',auth.restrict, tracks.getAll,(req,res)=> {
  res.render('artists/saveSongs', { tracksData :res.locals.alltracksData})
})

tracksRouter.get('/track',auth.restrict, (req,res) => {
  res.render("tracks/track",res.locals.searchData);
});

tracksRouter.get('/track/:id', auth.restrict, tracks.findById, (req, res, next) => {
  res.render("artists/singleTrack", res.locals.trackData);
})

tracksRouter.post("/",auth.restrict, tracks.create,(req, res, next)=> {
  res.json({id: res.locals.newtrackId, body: req.body , user: req.user})
})

tracksRouter.get("/track/:id/edit",auth.restrict, tracks.findById, (req, res, next) => {
    res.render("artists/singleTrack-edit", res.locals.trackData);
});

tracksRouter.delete('/track/:id', auth.restrict, tracks.destroy, (req,res,next)=> {
  res.json({ id: req.params.id})
})

tracksRouter.put("/track/:trackId",auth.restrict, tracks.update, (req, res, next) => {
    res.json(res.locals.upToDateTrackData);
});

module.exports = tracksRouter;