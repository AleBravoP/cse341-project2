const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Near Earth Asteroids & Comets']
    const result = await mongodb.getDatabase().db().collection('near_asteroids_comets').find();
    result.toArray().then((near_asteroids_comets) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(near_asteroids_comets);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Near Earth Asteroids & Comets']
    const nearEarthObjectId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('near_asteroids_comets').find({_id: nearEarthObjectId});
    result.toArray().then((near_asteroids_comets) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(near_asteroids_comets[0]);
    });
};

const createNearEarthObject = async (req, res) => {
    //#swagger.tags=['Near Earth Asteroids & Comets']
    const nearEarthObject = {
        designation: req.body.designation,
        discovery_date: req.body.discovery_date,
        h_mag: req.body.h_mag,
        moid_au: req.body.moid_au,
        q_au_1: req.body.q_au_1,
        q_au_2: req.body.q_au_2,
        period_yr: req.body.period_yr,
        i_deg: req.body.i_deg,
        pha: req.body.pha,
        orbit_class: req.body.orbit_class
    };
    const response = await mongodb.getDatabase().db().collection('near_asteroids_comets').insertOne(nearEarthObject);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while adding the near earth object.');
    }
};

const updateNearEarthObject = async (req, res) => {
    //#swagger.tags=['Near Earth Asteroids & Comets']
    const nearEarthObjectId = new ObjectId(req.params.id);
    const nearEarthObject = {
        designation: req.body.designation,
        discovery_date: req.body.discovery_date,
        h_mag: req.body.h_mag,
        moid_au: req.body.moid_au,
        q_au_1: req.body.q_au_1,
        q_au_2: req.body.q_au_2,
        period_yr: req.body.period_yr,
        i_deg: req.body.i_deg,
        pha: req.body.pha,
        orbit_class: req.body.orbit_class
    };
    const response = await mongodb.getDatabase().db().collection('near_asteroids_comets').replaceOne({_id: nearEarthObjectId}, nearEarthObject);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the near earth object.');
    }
};

const deleteNearEarthObject = async (req, res) => {
    //#swagger.tags=['Near Earth Asteroids & Comets']
    const nearEarthObjectId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('near_asteroids_comets').deleteOne({_id: nearEarthObjectId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the near earth object');
        // res.status(500).json(response.error);
    }
};

module.exports = {
    getAll,
    getSingle,
    createNearEarthObject,
    updateNearEarthObject,
    deleteNearEarthObject
};