const User = require('../models/user');
const router = require('express').Router();
const passport = require('passport');
const artists = require('../models/artists.js');
const tracks = require("../models/tracks.js");
const auth = require('../services/auth');

// ----------------------------------------
// users index

router.get('/', (req, res, next) => {
    res.redirect('/users/profile');
});

router.post(
    '/',
    // we want the behavior of the site to vary depending on whether or
    // not the user is already logged in. If they are logged in, we want
    // to send them to /users/profile. If they are not, we want to send
    // them to users/new.
    passport.authenticate(
        // The following string indicates the particular strategy instance
        // we'll want to use to handle signup. We defined behavior for
        // 'local-signup' back in index.js.
        'local-signup', {
            failureRedirect: '/users/new',
            successRedirect: '/users/profile'
        }
    )
);

// ----------------------------------------
// register new user

router.get('/new', (req, res) => {
    res.render('users/new');
});

// ----------------------------------------
// user logout

router.get('/logout', (req, res) => {
    // passport put this method on req for us
    req.logout();
    // redirect back to index page
    res.redirect('/');
});

// ----------------------------------------
// user login

router.get('/login', (req, res) => {
    res.render('users/login');
});

// passport.authenticate will _build_ middleware for us
// based on the 'local-login' strategy we registered with
// passport in auth.js
router.post('/login', passport.authenticate(
    'local-login', {
        failureRedirect: '/users/login',
        successRedirect: '/users/profile'
    }
));


// ----------------------------------------
// user profile

router.get(
    '/profile',
    // Middleware (that we wrote) ensuring that if the user is not
    // authenticated, he or she will be redirected to the login screen.
    auth.restrict,
    User.findByEmailMiddleware,
    (req, res) => {
        console.log('in handler for users/profile');
        console.log('req.user:');
        console.log(req.user);
        res.render('users/profile', { user: res.locals.userData });
    }
);

router.post(
    '/songs', 
    auth.restrict,
   User.findByEmailMiddleware,
   tracks.create,
   (req, res) => {
    console.log(res.locals.trackData);
   res.json({ id:  res.locals.trackData.id });
    // res.render("artists/songs", { trackData: res.locals.trackData })
   }
);


router.put(
    '/track/{{id}}/edit', 
    auth.restrict,
   // User.findByEmailMiddleware,
   tracks.update,
   (req, res) => {
   res.send( {id: res.locals.upToDateTrackData});
   }
);

router.delete(
    '/track/{{id}}', 
    auth.restrict,
   User.findByEmailMiddleware,
   tracks.destroy,
   (req, res) => {
    res.json({});
   }
);

router.post(
    '/counter',
    auth.restrict,
    User.incrementUserCounter,
    (req, res) => {
        console.log('in post at /counter, req.user: ', req.user);
        res.json(res.locals.counterData);
    }
);

module.exports = router;