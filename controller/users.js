const User = require('../models/user.js');

module.exports.renderSignupForm = (req, res) => {
    res.render('users/signup.ejs');
};

module.exports.handleSignup = async(req, res) => {
    try {
        const {username, email, password} = req.body;
        const user = new User({username, email});
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) {
                return next(err);
            }
            req.flash('success', 'Welcome to Rental Marketplace!');
            res.redirect('/listings');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('signup');
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login.ejs');
};

module.exports.handleLogin = async(req, res) => {
            req.flash('success', 'Welcome back!');
            let redirectUrl = res.locals.redirectUrl || '/listings';
            res.redirect(redirectUrl);
};

module.exports.handleLogout = (req, res) => {
    req.logout((err) => {
        if (err) { 
            return next(err); 
        }
        req.flash('success', 'Logged you out!');
        res.redirect('/listings');
    });
};