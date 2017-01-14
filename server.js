const express = require('express');
const apiRouter = require('./routers/apiRouter');
const registerRouter = require('./routers/registerRouter');
const pug = require('pug');
const app = express();

app.use('/api',apiRouter);
app.use('/register',registerRouter);
app.set('view engine', 'pug')
app.set('views', './views')
app.listen('3000',(err,data)=>{
	console.log('listening');
})

