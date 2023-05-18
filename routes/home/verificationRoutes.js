const express = require('express');
const router = express.Router();
const businessDetailsModel = require("../../Model/businessOwners/business")
const sgMail = require('@sendgrid/mail')

router
    .route('/')
    .get((req, res) => {
        if (req.session.user) {
            return res.redirect(`/profile/${req.session.user._id}/home`);
        }
        res.render("verification/verification");
    })
    .post(async (req, res) => {
        const { email } = req.body;
        try {
            const business = await businessDetailsModel.findOne({ email });
            // ================================
            if (business.videoAgreement) {
                if (!business.isVerified) {
                    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
                    const msg = {
                        to: business.email,
                        from: process.env.EMAIL,
                        subject: 'Verification required for Aseedo',
                        // text: `hello`,
                        html: `Click on the link below to verify your Aseedo Account\n https://aseedo.herokuapp.com/verify/${process.env.SERVER_SECRET}/user/${business._id}`,
                    }
                    sgMail
                        .send(msg)
                        .then((response) => {
                            console.log('Email sent')
                            res.status(200).redirect(`/profile/${business._id}/home`);
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }
                else {
                    res.redirect(`/profile/${business._id}/home`);
                }

            }
            else {
                res.redirect(`/signup/businessowner/${business._id}/agreement`);
            }
            // ================================

        }
        catch (err) {
            console.log(err);
            res.status(400).json({ status: "Email Not Registered" });
        }
    })

router
    .route("/:id")
    .get(async (req, res) => {
        try {
            const { id } = req.params;
            const business = await businessDetailsModel.findById(id);
            if (!business.isVerified) {
                await businessDetailsModel.findByIdAndUpdate(id, { isVerified: true });
                req.session.user = business;
                res.status(200).redirect(`/profile/${id}/home`);
            }
            else {
                req.session.user = business;
                res.status(200).redirect(`/profile/${id}/home`);
            }

        }
        catch (err) {
            console.log(err);
            res.status(400).json({ status: "error" });
        }
    })


module.exports = router;