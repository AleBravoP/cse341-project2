const router = require('express').Router();
const celestialBodiesController = require('../controllers/celestialBodies');

const { isAuthenticated } = require('../middleware/authenticate');
const validation = require("../middleware/validate");

router.get('/', celestialBodiesController.getAll);
router.get('/:id', celestialBodiesController.getSingle);

// Create a POST route to create a new celestial body
router.post('/', isAuthenticated, validation.validateCelestial, celestialBodiesController.createCelestialBody);

// Create a PUT route to update a celestial body
router.put('/:id', isAuthenticated, validation.validateCelestial, celestialBodiesController.updateCelestialBody);

// Create a DELETE route to delete a celestial body
router.delete('/:id', isAuthenticated, validation.validateCelestial, celestialBodiesController.deleteCelestialBody);

module.exports = router;