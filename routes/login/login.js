const express = require('express');
const router = express.Router();
const { renderLoginForm, postLoginForm } = require('../../Controllers/login/login');



router
    .route('/')
    .get(renderLoginForm)
    .post(postLoginForm)


module.exports = router;