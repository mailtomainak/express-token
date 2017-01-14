const express = require('express');
const commentsApiRouter = express.Router();


commentsApiRouter.get('/',(req,res,next)=>{
	res.send('Hi');
}).post('/',(req,res,next)=>{
	console.log(req.body);
	res.send('Hi Post');
})
module.exports = commentsApiRouter;


