// const router = require('express').Router();
const express = require("express");
const router = express();
const artists = require('../models/artists.js');
const auth = require('../services/auth');



router.get('/viewArtist',auth.restrict, artists.all, (req,res) => {
  console.log('here');
  // console.log(res.locals.searchData);
  res.render('./users/profile',  res.locals.searchData);
});







module.exports=router;