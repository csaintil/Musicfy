// Beers controller

const express = require('express'),
    router = express(),
    // the model:
    beers = require('../models/beers.js');

router.get('/', (req, res) => {
    beers
        .allBeers()
        .then((beersData) => {
            res.render('beers', { beersData });
        })
        .catch((error) => {
            console.log('error encountered: ', error);
            res.send(error);
        });
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
    beers
        .beer(id)
        .then((beerData)=>{
        	console.log('rendering beer ' + id, beerData);
        	res.render('beer', beerData);
        })
        .catch((error) => {
        	console.log('error encountered: ', error);
        	res.send(error);
        });
});


module.exports = router;
