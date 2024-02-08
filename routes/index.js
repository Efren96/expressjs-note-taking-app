const router = require('express').Router();

const apiRouter = require('./apiRoutes');

router.use('/notes', apiRouter);

module.exports = router;
