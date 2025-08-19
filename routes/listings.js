const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync'); 
const Listing = require('../models/listing');
const { isloggedIn, isOwner, validateListing } = require('../middleware');
const listingsController = require('../controllers/listings');
const multer = require('multer');
const { storage } = require('../cloudConfig'); // Import cloudinary config
const upload = multer({ storage }); // Directory for uploaded files


router
    .route('/')
    .get(wrapAsync(listingsController.index))
    .post(
        isloggedIn, 
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingsController.createListing));

// New Route
router.get("/new", isloggedIn, listingsController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingsController.showListing))
    .put(
        isloggedIn, 
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingsController.updateListing)
    )
    .delete(
        isloggedIn, 
        isOwner,
        wrapAsync(listingsController.destroyListing)
    );

// Edit Route
router.get("/:id/edit", 
    isloggedIn,
    isOwner,
    wrapAsync(listingsController.renderEditForm));

module.exports = router;