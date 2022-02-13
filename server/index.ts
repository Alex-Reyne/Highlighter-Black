import express, { Request, Response } from 'express';
const cors = require('cors');
const http = require("http");
require('dotenv').config();

const app = express();

// Declaration merging for TS types
declare module 'express-serve-static-core' {
	interface ParamsDictionary {
		id: number;
	}
}

import './helpers/user_helpers';
import pg from 'pg';

app.use(express.json());
app.use(cors());

// Server port
const PORT = process.env.PORT;

// Separated Routes for each Resource
import userRouter from './routes/user';

// Mount all resource routes
app.use('/api/users', userRouter);

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'BRUH' });
});

app.listen(PORT || 5001, () => {
	console.log(`I'm listening bro. PORT: ${PORT}`)
});

setInterval(function() {
	http.get("https://highlighter-black.herokuapp.com/");
}, 300000); // every 5 minutes (300000)