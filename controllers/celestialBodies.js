const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('celestial_bodies').find();
    result.toArray().then((celestial_bodies) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(celestial_bodies);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Celestial Bodies']
    const celestialBodyId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('celestial_bodies').find({_id: celestialBodyId});
    result.toArray().then((celestial_bodies) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(celestial_bodies[0]);
    });
};

const createCelestialBody = async (req, res) => {
    //#swagger.tags=['Celestial Bodies']
    const celestialBody = {
        name: req.body.name,
        type: req.body.type,
        orbital_period_years: req.body.orbital_period_years,
        name_origin: req.body.name_origin,
        influence: req.body.influence
    };
    const response = await mongodb.getDatabase().db().collection('celestial_bodies').insertOne(celestialBody);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while adding the celestial body.');
    }
};

const updateCelestialBody = async (req, res) => {
    //#swagger.tags=['Celestial Bodies']
    const celestialBodyId = new ObjectId(req.params.id);
    const celestialBody = {
        name: req.body.name,
        type: req.body.type,
        orbital_period_years: req.body.orbital_period_years,
        name_origin: req.body.name_origin,
        influence: req.body.influence
    };
    const response = await mongodb.getDatabase().db().collection('celestial_bodies').find({_id: celestialBodyId}, celestialBody);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the celestial body.');
    }
};

const deleteCelestialBody = async (req, res) => {
    //#swagger.tags=['Celestial Bodies']
    const celestialBodyId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('celestial_bodies').deleteOne({_id: celestialBodyId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the celestial body');
        // res.status(500).json(response.error);
    }
};

module.exports = {
    getAll,
    getSingle,
    createCelestialBody,
    updateCelestialBody,
    deleteCelestialBody
};