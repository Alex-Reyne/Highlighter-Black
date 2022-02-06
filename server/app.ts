const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const app = express();
const bodyParser = require('body-parser');

const db = require('./db');
const devHelpers = require('./helpers/devHelpers')(db);

// MIDDLEWARE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		saveUninitialized: true,
		resave: false,
		cookie: {
			httpOnly: true,
		},
	})
);

app.use((req: any, res: any, next: any) => {
	console.log(req.session);
	next();
});

// Separated Routes for each Resource
const authRouter = require('./routes/auth');

// Mount all resource routes
app.use('/api/auth', authRouter(devHelpers));

// Note: mount other resources here, using the same pattern above
// app.post('/send_email', (req, res) => {
// 	const params = req.body.params;

// 	sendEmail(params).then(() => {
// 		res.send();
// 	});
// });

// // Home page
// app.get('/', (req, res) => {
// 	res.render('index');
// });

// EXAMPLES
// app.get('/api/candidates', (req, res) => {
// 	const candidates = [];

// 	res.json(candidates);
// });

// app.get('/api/candidates/:candidate_id', (req, res) => {
// 	const candidate = { name: 'Martin' };

// 	res.json(candidate);
// });

//EXAMPLE LOGIN IN ROUTE
//have authorization here
// app.post('/api/login', (req, res) => {
// 	const someUser = { name: 'Little Chicken' };
// 	res.cookie('name', 'Little Chicken');
// 	//add authentication here

// 	res.json(someUser);
// });

// EXAMPLE AUTHENTICATE ROUTE- DIFFERENT FROM LOGIN
// only reads the cookie and returns appropriate cookie based on the cookie- to use on first load- to persist login when use leaves our page
// app.post('/api/login', (req, res) => {
// 	const someUser = req.cookies.name ? { name: 'Little Chicken' } : null;
// 	//add authentication here

// 	res.json(someUser);
// });
module.exports = app;
