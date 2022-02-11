import express, { Request, Response } from 'express';
import { getUsers, getUserById } from '../helpers/user_helpers';
const { getLinks } = require('../helpers/links_helpers');
const router = express.Router();

interface err {
	message: string;
}

// Declaration merging for TS types
declare module 'express-serve-static-core' {
	interface ParamsDictionary {
		id: number;
	}
}

/* GET list of all users */
router.get('/', (req: Request, res: Response) => {
	getUsers()
		.then((users: object) => res.json(users))
		.catch((err: err) =>
			res.json({
				error: err.message,
			})
		);
});

// return data for single user based on id (can retrieve from cookies)
router.get('/:id', (req: Request, res: Response) => {
	getUserById(req.params.id)
		.then((dev: any) => res.json(dev))
		.catch((err: any) =>
			res.json({
				error: err.message,
			})
		);
});

// get all links for single user
router.get('/:id/links', (req: Request, res: Response) => {
	getLinks(req.params.id)
		.then((links: any) => {
			res.json(links);
		})
		.catch((err: any) =>
			res.json({
				error: err.message,
			})
		);
});

export default router;
