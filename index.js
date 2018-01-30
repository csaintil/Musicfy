// // ============================================================
// Setup

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
 // const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const mustacheExpress = require('mustache-express');

const port = process.env.PORT || 8080;


// registers the template engine for use in res.render
app.engine('html', mustacheExpress());
// sets the file extension to use for views when the file extension is omitted
app.set('view engine', 'html');
// sets the the directory that will contain our mustache template files, or "views"
app.set('views', __dirname + '/views');
// sets the directory that will contain our static (not generated on the fly) resources, such as css, client-side Javascript files, and images
app.use(express.static(__dirname + '/public'));

// morgan setup
app.use(morgan('dev'));

// body-parser setup
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => { console.log("Server started on " + port); });



// Important: mount express middleware BEFORE passport middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

// ====================================================================
// PASSPORT STUFF
//const passport = require('passport');
const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);

// END PASSPORT STUFF
// ====================================================================

// app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/users', require('./controllers/users'));
// app.use('/artists', require('./controllers/artists'));
app.use('/users', require('./controllers/artists'));

app.use('/users', require('./controllers/tracks.js'));


app.get('/', (req, res) => {
    res.render('./home/homepage');
});

// Set up error handling middleware (notice that this is the LAST thing we do)
app.use((err, req, res, next) => {
	console.log('Error encountered:', err);
	res.status(500);
	res.send(err);
});






// // require necessary top-level modules
// const express = require("express");
// const bodyParser = require("body-parser");
// const mustacheExpress = require("mustache-express");
// // const pgpromise = require("pg-promise");
// // const housesRoutes = require("./controllers/houses.js");

// // other constants
// const port = 5000;
// const app = express(); // the app object

// // hook up body-parser
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// // hook up mustache-express
// // registers the template engine for use in res.render
// app.engine("html", mustacheExpress());

// //sets the file extension to use for views when the file extension is omitted
// app.set("view engine", "html");

// // sets the the directory that will contain our mustache template files, or "views"
// app.set("views", __dirname + "/views");

// // sets the directory that will contain our static 
// app.use(express.static(__dirname + "/public"));

// // Start listening!
// app.listen(port, () => {
//   console.log("Server started on " + port);
// });

// // hook it up to the app
// app.get("/", (req, res, next) => {
//   res.render("./home/homepage");
// });

// app.use('/artists', require('./controllers/artists'));












