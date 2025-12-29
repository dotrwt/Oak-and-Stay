const Listing = require('../models/listing');

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render('./listings/index.ejs' , {allListings});
};

module.exports.renderNewForm = (req, res) => {
    res.render('./listings/new.ejs');
};

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate('reviews').populate('owner');

    if(!listing) {
        req.flash('error', 'Cannot find that listing!');
        return res.redirect('/listings');
    };

    res.render('./listings/show.ejs', {listing});
};

module.exports.createListing = async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash('success', 'Successfully created a new listing!');
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);

    if(!listing) {
        req.flash('error', 'Cannot find that listing!');
        return res.redirect('/listings');
    };

    res.render('./listings/edit.ejs', {listing});
};

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash('success', 'Successfully updated the listing!');
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteListing = async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted the listing!');
    res.redirect('/listings');
};