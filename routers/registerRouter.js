const express = require('express');
const formidable = require('formidable');
const util = require('util');


const registerRouter = express.Router();

// registerRouter.use(bodyParser());

registerRouter.get('/',function(req,res,next){
	res.render('register');
});

registerRouter.post('/',function(req,res,next){
	  var form = new formidable.IncomingForm();
	  form.uploadDir="uploads";
	  form.keepExtensions = true;
	   form.parse(req, function(err, fields, files) {
     	 if(!err){
     	 	console.log(fields);
     	 	console.log(files);
     	 	res.send('OK');
     	 }
    });


});
module.exports = registerRouter;