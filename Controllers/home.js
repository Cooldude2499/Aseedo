module.exports.renderHomepage = (req, res) => {
    if(req.session.user){
        return res.redirect(`/profile/${req.session.user._id}/home`);
    }
    res.render('index');
}

module.exports.renderServicesPage = (req, res) => {
    if(req.session.user){
        return res.redirect(`/profile/${req.session.user._id}/home`);
    }
    res.render('Services/services');
}