import express, { Request, Response } from 'express';
import pg from 'pg';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.json(200, 'BRUH');
});

app.listen(8080, (req: Request, res: Response) => `I'm listening bro`);
