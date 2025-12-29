const expres = require('express');
const router = expres.Router(mergeParams = true);
const wrapAsync = require('../utils/wrapAsync.js');
const { isLoggedIn, isOwner, validateListing} = require('../middleware.js');
const methodOverride = require('method-override');
const listingController = require('../controller/listings.js');


//Method Override setup
router.use(methodOverride('_method'));

//Needed to read form data
router.use(expres.urlencoded({ extended: true }));


//Index route
router.get ('/', wrapAsync(listingController.index));


//New route
router.get('/new', isLoggedIn, listingController.renderNewForm);


//Show route
router.get('/:id', wrapAsync(listingController.showListing));


//Create route
router.post('/', validateListing, isLoggedIn, wrapAsync(listingController.createListing));


//Edit route 
router.get('/:id/edit', validateListing, isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


//Update route
router.put('/:id', isLoggedIn, isOwner,wrapAsync(listingController.updateListing));


//Delete route 
router.delete('/:id', isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

module.exports = router;
