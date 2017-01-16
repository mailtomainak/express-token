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
		if(err) {
			res.send(err);
		}
		else{
			req.session.email=data.email;
			res.redirect(303,'/register/success');		}
		
	});
});


registerRouter.get('/success',function(req,res,next){
	// const email = req.session.email;
	// console.log(req.session);
	//req.session.email = null;
	res.render('register-success');
});

module.exports = registerRouter;