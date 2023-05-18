const express = require('express');
const router = express.Router();
const { renderHomepage, renderServicesPage } = require('../../Controllers/home');
const { renderLoginForm, postLoginForm, logout } = require('../../Controllers/login/login');

router
    .route('/')
    .get(renderHomepage);

router
    .route('/signup')
    .get(renderServicesPage)


router
    .route('/login')
    .get(renderLoginForm)
    .post(postLoginForm)

router
    .route('/logout')
    .get(logout)

module.exports = router;