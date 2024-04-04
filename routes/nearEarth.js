const router = require('express').Router();
const nearEarthController = require('../controllers/nearEarth');

router.get('/', nearEarthController.getAll);
router.get('/:id', nearEarthController.getSingle);

// Create a POST route to create a new near-earth object
router.post('/', nearEarthController.createNearEarthObject);

// Create a PUT route to update a near-earth object
router.put('/:id', nearEarthController.updateNearEarthObject);

// Create a DELETE route to delete a near-earth object
router.delete('/:id', nearEarthController.deleteNearEarthObject);

module.exports = router;