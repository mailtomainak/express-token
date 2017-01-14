const express = require('express');
const registerApiRouter = express.Router();

registerApiRouter.post('/',(req,res,next)=>{
	res.send('hi');
	res.end();
});


module.exports = registerApiRouter;