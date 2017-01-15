//user-controller

var userModel = require('../models/User');


var saveUser = function(user,callback){
	
	var newUser = new userModel({
		email:user.emailid,
		password:user.password		
	});

	newUser.save(function(err,user){
		if(err) return callback(err);
		return callback(null,user);
	});
};


exports.saveUser=saveUser;