const express = require('express');
const commentsApiRouter = express.Router();

commentsApiRouter.get('/',(req,res,next)=>{
	res.send('Hi');
}).post('/',(req,res,next)=>{
	res.send('Hi Post');
})
module.exports = commentsApiRouter;


