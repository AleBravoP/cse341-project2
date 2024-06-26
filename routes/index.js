const router = require('express').Router();
const passport = require("passport");

router.use('/', require('./swagger'));

router.use('/celestial', require('./celestialBodies'));
router.use('/near-earth', require('./nearEarth'));

router.get("/login", passport.authenticate("github"), (req, res) => {});
router.get("/logout", function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

module.exports = router;