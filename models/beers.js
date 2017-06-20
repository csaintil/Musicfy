// Beer model.

const db = require('./setup.js');

function allBeers(){
	const queryPromise = db.manyOrNone("SELECT * FROM beers");
	return queryPromise;
}

function beer(id){
	const queryPromise = db.one("SELECT * FROM beers WHERE beers.id = ${id}", {id: id});
	return queryPromise;
}

module.exports = { allBeers, beer };
