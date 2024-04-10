const router = require('express').Router();
const nearEarthController = require('../controllers/nearEarth');

const { isAuthenticated } = require('../middleware/authenticate');
const validation = require("../middleware/validate");

router.get('/', nearEarthController.getAll);
router.get('/:id', nearEarthController.getSingle);

// Create a POST route to create a new near-earth object
router.post('/', isAuthenticated, validation.validateNearEarth, nearEarthController.createNearEarthObject);

// Create a PUT route to update a near-earth object
router.put('/:id', isAuthenticated, validation.validateNearEarth, nearEarthController.updateNearEarthObject);

// Create a DELETE route to delete a near-earth object
router.delete('/:id', isAuthenticated, validation.validateNearEarth, nearEarthController.deleteNearEarthObject);

module.exports = router;