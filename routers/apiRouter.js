const express = require('express');
const commentsApiRouter = require('./apiRouterComments');



var apiRouter = express.Router();

apiRouter.use('/comments',commentsApiRouter);

module.exports = apiRouter;