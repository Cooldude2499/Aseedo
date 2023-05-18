const businessDetailsModel = require('../../Model/businessOwners/business')
const bcrypt = require('bcrypt');

module.exports.renderLoginForm = (req, res) => {
    if (req.session.user) {
        return res.redirect(`/profile/${req.session.user._id}/home`);
    }
    res.render('login/loginForm');
}

module.exports.postLoginForm = async (req, res) => {
    if (req.session.user) {
        return res.redirect(`/profile/${req.session.user._id}/home`);
    }
    const { email, password } = req.body;
    try {
        const result = await businessDetailsModel.findOne({ email })
        if (result) {
            if (bcrypt.compare(password, result.password)) {
                req.session.user = result;
                if (result.type === 'business owner') {
                    res.redirect(`profile/${result._id}/home`);
                }
            }
            else {
                console.log("Email or password is incorrect!");
                res.redirect('/login')
            }
        }
        else {
            console.log("Email does not exist");
            res.redirect('/login')
        }
    }
    catch (error) {
        console.error(error);
        res.redirect('/login');
    }
}


module.exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}