const router = require('express').Router();
const nearEarthController = require('../controllers/nearEarth');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', nearEarthController.getAll);
router.get('/:id', nearEarthController.getSingle);

// Create a POST route to create a new near-earth object
router.post('/', isAuthenticated, nearEarthController.createNearEarthObject);

// Create a PUT route to update a near-earth object
router.put('/:id', isAuthenticated, nearEarthController.updateNearEarthObject);

// Create a DELETE route to delete a near-earth object
router.delete('/:id', isAuthenticated, nearEarthController.deleteNearEarthObject);

module.exports = router;