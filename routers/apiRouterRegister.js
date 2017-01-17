const express = require('express');
const registerApiRouter = express.Router();
const bodyParser = require('body-parser');
const userController = require('../controller/user-controller');
const jwt = require('../services/jwt-service');


registerApiRouter.post('/',(req,res,next)=>{
	const user = req.body;
	const payload = {
		iss:req.hostname,
		sub:req._id
	}
	const secret = 'this is a  secret';
	const token = jwt.encode(payload,secret);

	userController.saveUser(user,function(err,data){
		if(err) {
			res.status(500).json({error:"Server Error"});
		}
		else{			
			res.status(201).json({user:data.removePassword(),token:token});
		}
		
	});
});


module.exports = registerApiRouter;