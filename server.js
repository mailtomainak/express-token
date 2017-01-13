const express = require('express');
const apiRouter = require('./routers/apiRouter');
const app = express();



app.use('/api',apiRouter);



app.listen('3000',(err,data)=>{
	console.log('listening');
})
