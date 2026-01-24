const expres = require('express');
const router = expres.Router(mergeParams = true);
const wrapAsync = require('../utils/wrapAsync.js');
const { isLoggedIn, isOwner, validateListing} = require('../middleware.js');
const methodOverride = require('method-override');
const listingController = require('../controller/listings.js');
const multer  = require('multer')
const { storage } = require('../cloudConfig.js');
const upload = multer({storage});


//Method Override setup
router.use(methodOverride('_method'));

//Needed to read form data
router.use(expres.urlencoded({ extended: true }));

//Index and Create route
router.route('/')
.get (wrapAsync(listingController.index))
.post(validateListing, isLoggedIn, upload.single("listing[image]") ,wrapAsync(listingController.createListing));

//New route
router.get('/new', isLoggedIn, listingController.renderNewForm);

//Show, Update and Delete route
router.route('/:id')
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner,validateListing, upload.single("listing[image]") ,wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));


//Edit route 
router.get('/:id/edit', validateListing, isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;
