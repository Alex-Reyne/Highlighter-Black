import express, { Request, Response } from 'express';
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

// Separated Routes for each Resource
import userRouter from './routes/user';

// Mount all resource routes
app.use('/api/user', userRouter);

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'BRUH' });
});

app.listen(8080, () => console.log(`I'm listening bro`));
