// ============================================================
// Setup

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mustacheExpress = require('mustache-express');

// registers the template engine for use in res.render
app.engine('html', mustacheExpress());
// sets the file extension to use for views when the file extension is omitted
app.set('view engine', 'html');
// sets the the directory that will contain our mustache template files, or "views"
app.set('views', __dirname + '/views');
// sets the directory that will contain our static (not generated on the fly) resources, such as css, client-side Javascript files, and images
app.use(express.static(__dirname + '/public'));

app.listen(port, () => { console.log("Server started on " + port); });

// get the database
const db = require('./models/setup.js');

// Here's just a test to see if the db is working:
db.query("SELECT * FROM beers")
    .then((data) => {
        console.log("test query:", data);
    });

// get the beers router (the export of the beers controller file)
const beersRouter = require('./controllers/beers.js');
// hook it up to the app
app.use('/beers', beersRouter);

// maybe this shouldn't be here
app.get("/", function(req, res) {
    res.send("i don't know what I should even do");
});

// set up an api route for get "/beers'

// set up an api route for get "/beers/:id"
