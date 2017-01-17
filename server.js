const express = require('express');
const apiRouter = require('./routers/apiRouter');
const registerRouter = require('./routers/registerRouter');
const mongoose = require('mongoose');



// const pug = require('pug');
const app = express();
// app.use(cookieParser());
// app.use(session({
//   secret: 'my-secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));

app.use('/api',apiRouter);
//app.use('/register',registerRouter);
// app.set('view engine', 'pug')
// app.set('views', './views');


//move to config
mongoose.connect('mongodb://localhost:27017/myapp');

app.listen('3000',(err,data)=>{
	console.log('listening');
})

