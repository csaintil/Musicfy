// Beers controller

const router = require("express").Router();
const beers = require("../models/beers.js");

router.get("/", beers.allBeers, (req, res, next) => {
    res.render("beers", { beersData: res.locals.allBeersData });
});

router.get("/:beerId", beers.findById, (req, res, next) => {
    res.render("beer", res.locals.beerData);
});

router.post("/", beers.create, (req, res, next) => {
    res.json({ id: res.locals.newBeerId, body: req.body });
});

router.delete("/:beerId", beers.destroy, (req, res, next) => {
    res.json({ id: req.params.beerId });
});

router.put("/:beerId", beers.update, (req, res, next) => {
    res.json(res.locals.updatedBeerData);
});

module.exports = router;
