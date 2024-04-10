const router = require('express').Router();
const celestialBodiesController = require('../controllers/celestialBodies');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', celestialBodiesController.getAll);
router.get('/:id', celestialBodiesController.getSingle);

// Create a POST route to create a new celestial body
router.post('/', isAuthenticated, celestialBodiesController.createCelestialBody);

// Create a PUT route to update a celestial body
router.put('/:id', async (req, res) => {
    await isAuthenticated, celestialBodiesController.updateCelestialBody (req, res);
});

// Create a DELETE route to delete a celestial body
router.delete('/:id', isAuthenticated, celestialBodiesController.deleteCelestialBody);

module.exports = router;