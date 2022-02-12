import express, { Request, Response } from 'express';
require('dotenv').config();

// Declaration merging for TS types
declare module 'express-serve-static-core' {
	interface ParamsDictionary {
		id: number;
	}
}

import './helpers/user_helpers';
import pg from 'pg';

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

// Separated Routes for each Resource
import userRouter from './routes/user';

// Mount all resource routes
app.use('/api/users', userRouter);

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'BRUH' });
});

app.listen(PORT || 3001, () => console.log(`I'm listening bro`));
