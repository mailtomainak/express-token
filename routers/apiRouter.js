const express = require('express');
const commentsApiRouter = require('./apiRouterComments');
const registerApiRouter = require('./apiRouterRegister');
const bodyParser = require('body-parser');




var apiRouter = express.Router();

//enable CORS
apiRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

apiRouter.use(bodyParser.json());
//map all the routes  here.
apiRouter.use('/comments',commentsApiRouter);
apiRouter.use('/register',registerApiRouter);

module.exports = apiRouter;