var express = require('express');
var app = express();
var passport = require('passport');
var flash = require('flash');

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var LocalStrategy = require('passport-local').Strategy;

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    console.log('password local-login called:' + email + ', ' + password);

    var database = app.get('database');
    database.UserModel.findOne({ 'email': email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            console.log('account is not same');
            return done(null, false, req.flash('loginMessage', 'No account on the database'));
        }

        var authenticated = user.authenticate(password, user._doc.salt, user._doc.hashed_password);

        if (!authenticated) {
            console.log('Password is not same');
            return done(null, false, req.flash('loginMessaage', 'No password is not same'));
        }
        console.log('account / password is same');
        return done(null, user);
    });
}));

passport.user('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    var paramName = req.body.name || req.query.name;
    console.log('passport local-signup called: ' + email + ', ' + password + ', ' + paramName);

    process.nextTick(function () {
        var database = app.get('database');
        database.UserModel.findOne({ 'email': email }, function (err, user) {
            if (err) { return done(err); }
            if (user) {
                console.log('account is already existed');
                return done(null, false, req.flash('singupMessage', 'account is already existed'));
            }
            else {
                var user = new database.UserModel({ 'email': email, 'password': password, 'name': paramName });
                user.save(function (err) {
                    if (err) { throw err; }
                    console.log("user data is added");
                    return done(null, user);
                });
            }
        });
    });
}));

passport.serializeUser(function (user, done) {
    console.log('serializeUser() called');
    console.dir(user);
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    console.log('deserializeUser() called');
    console.dir(user);
    done(null, user);
});

var router = express.Router();
route_loader.init(app, router);

router.route('/').get(function (req, res) {
    console.log('/ pass requested');
    res.render('index.ejs');
});

app.get('/login', function (req, res) {
    console.log('/login pass requested');
    res.render('login.ejs', { message: req.flash('loginMessage') });
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/logout', function(req, res) {
    console.log('/logout pass requested');
    req.logout();
    res.redirect('/');
});