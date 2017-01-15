const express = require('express');
//const formidable = require('formidable');
const bodyParser = require('body-parser');
const userController = require('../controller/user-controller');
const registerRouter = express.Router();


registerRouter.use(bodyParser.urlencoded());



registerRouter.get('/',function(req,res,next){
	res.render('register');
});

registerRouter.post('/',function(req,res,next){	
	userController.saveUser(req.body,function(err,data){
		if(err) res.send(err);
		res.send(data);
	});
});

module.exports = registerRouter;