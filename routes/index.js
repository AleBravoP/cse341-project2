const router = require('express').Router();

// router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World]
    res.send('Hello World Project 2');
});

// router.use('/users', require('./users'));

module.exports = router;