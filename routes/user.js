const expres = require('express');
const router = expres.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const userController = require('../controller/users.js');

const {saveRedirectUrl} = require('../middleware.js');

//Combined route for signup
router.route('/signup')
.get(userController.renderSignupForm) 
.post(wrapAsync(userController.handleSignup));

router.route('/login')
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),
        userController.handleLogin);

//Handle logout logic
router.get('/logout', userController.handleLogout);


module.exports = router;