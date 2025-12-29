const expres = require('express');
const router = expres.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const {isLoggedIn, validateReview} = require('../middleware.js');
const reviewController = require('../controller/reviews.js');

//Post review route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Delete review route
router.delete("/:reviewId", wrapAsync(reviewController.deleteReview));

module.exports = router;