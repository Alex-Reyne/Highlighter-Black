import express from 'express';
import PingController from '../controllers/ping.controller';
import UsersController from '../controllers/users.controller';

const router = express.Router();

router.get('/ping', async (_req, res) => {
	const controller = new PingController();
	const response = await controller.getMessage();
	return res.send(response);
});
router.get('/users', async (_req, res) => {
	const controller = new UsersController();
	const response = await controller.getMessage();
	return res.send(response);
});

export default router;
