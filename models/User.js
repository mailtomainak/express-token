//user
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const emailRegexMatch = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let UserSchema = new mongoose.Schema({
	email:{type:String,required:true,match:emailRegexMatch},
	password:{type:String,required:true}
});
module.exports = mongoose.model('User',UserSchema);

UserSchema.pre('save',function(next){
	var user = this;	
	bcrypt.genSalt(10,function(err,salt){
		if(err) return next(err);
		bcrypt.hash(user.password,salt,null,function(err,hash){
				if(err) return next(err);
				user.password = hash;
				next();
		})
	})
});
