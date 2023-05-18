const express = require('express');
const router = express.Router();
const { renderBusinessOwnerHomepage } = require('../../Controllers/businessOwner/profile/home');
const { isLoggedIn } = require('../../middlerware/middleware')


router
    .route('/home')
    .get(isLoggedIn, renderBusinessOwnerHomepage)


module.exports = router;