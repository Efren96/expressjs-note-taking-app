const router = require('express').Router();

// Import our files containing our routes
const apiRouter = require('./apiRoutes');

router.use('/apiRoutes', apiRouter);

module.exports = router;
