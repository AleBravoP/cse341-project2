const router = require('express').Router();
const celestialBodiesController = require('../controllers/celestialBodies');

router.get('/', celestialBodiesController.getAll);
router.get('/:id', celestialBodiesController.getSingle);

// Create a POST route to create a new celestial body
router.post('/', celestialBodiesController.createCelestialBody);

// Create a PUT route to update a celestial body
router.put('/:id', celestialBodiesController.updateCelestialBody);

// Create a DELETE route to delete a celestial body
router.delete('/:id', celestialBodiesController.deleteCelestialBody);

module.exports = router;