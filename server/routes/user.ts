import express, { Request, Response } from 'express';
import { getUsers, getUserById, newUser } from '../helpers/user_helpers';
import { getLinks, addLink } from '../helpers/links_helpers';
const router = express.Router();

interface err {
	message: string;
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

// Add new user
router.post('/newuser', (req: Request, res: Response) => {
	newUser(req.body)
		.then((user: any) => {
			console.log(user);
		})
		.catch((err: any) =>
			res.json({
				error: err.message,
			})
		);
});

// Add new user
router.post('/newlink', (req: Request, res: Response) => {
	addLink(req.body)
		.then((link: any) => {
			console.log(link);
		})
		.catch((err: any) =>
			res.json({
				error: err.message,
			})
		);
});

export default router;
