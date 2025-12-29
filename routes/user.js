const expres = require('express');
const router = expres.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const userController = require('../controller/users.js');

const {saveRedirectUrl} = require('../middleware.js');

//Render signup form
router.get('/signup', userController.renderSignupForm);

//Handle signup logic
router.post('/signup', wrapAsync(userController.handleSignup));

//Render login form
router.get('/login', userController.renderLoginForm);

//Handle login logic
router.post('/login', 
        saveRedirectUrl, 
        passport.authenticate('local', 
            {failureFlash: true, 
            failureRedirect: '/login'
        }),
        userController.handleLogin);

//Handle logout logic
router.get('/logout', userController.handleLogout);


module.exports = router;