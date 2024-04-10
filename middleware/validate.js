const validator = require("../helpers/validate");

const validateCelestial = (req, res, next) => {
    const validationRules = {
        name: "required|string",
        type: "required|string",
        orbital_period_years: "required|integer",
        name_origin: "required|string",
        influence: "required|string"
    };
    validator(req.body, validationRules, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: "Validation failed",
                data: err
            });
        } else {
            next();
        }
    });
};

const validateNearEarth = (req, res, next) => {
    const validationRules = {
        designation: "required|string",
        discovery_date: "required|string",
        h_mag: "required|numeric",
        moid_au: "required|numeric",
        q_au_1: "required|numeric",
        q_au_2: "required|numeric",
        period_yr: "required|numeric",
        i_deg: "required|numeric",
        pha: "required|string",
        orbit_class: "required|string"
    };
    validator(req.body, validationRules, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: "Validation failed",
                data: err
            });
        } else {
            next();
        }
    });
};



module.exports = { validateCelestial, validateNearEarth };