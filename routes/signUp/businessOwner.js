const express = require('express');
const router = express.Router();
const path = require('path')
const { renderSignupForm, postBusinessOwnerSignUpForm, renderAgreementForm, postAgreementForm } = require('../../Controllers/signUp/businessOwner');
const multer = require('multer');
const { imageStorage } = require("../../cloudinary/imageStorage");
const imageParser = multer({ storage: imageStorage });
const { videoStorage } = require('../../cloudinary/videoStorage');
const videoParser = multer({ storage: videoStorage });

router
    .route('/')
    .get(
        renderSignupForm
    )
    .post(
        imageParser.array('shopImage'),
        postBusinessOwnerSignUpForm
    )

router
    .route("/:id/agreement")
    .get(renderAgreementForm)
    .post(
        videoParser.single('videoAgreement'),
        postAgreementForm
    )

module.exports = router;