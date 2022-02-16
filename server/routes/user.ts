import express, { Request, Response } from 'express';
import { getUsers, getUserById, newUser, updateUserImage } from '../helpers/user_helpers';
import { getLinks, addLink, deleteLink, resetLinks } from '../helpers/links_helpers';
const router = express.Router();
interface err {
  message: string;
}

/* GET list of all users */
router.get('/', (req: Request, res: Response) => {
  getUsers()
    .then((users: JSON) => res.json(users))
    .catch((err: err) =>
      res.json({
        error: err.message,
      })
    );
});

// return data for single user based on id (can retrieve from cookies)
router.get('/:id', (req: Request, res: Response) => {
  getUserById(req.params.id)
    .then((user: JSON) => res.json(user))
    .catch((err: any) =>
      res.json({
        error: err.message,
      })
    );
});

// get all links for single user
router.get('/:id/links', (req: Request, res: Response) => {
  getLinks(req.params.id)
    .then((links: JSON) => {
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
    .then((user: JSON) => {
      console.log(user);
    })
    .catch((err: any) =>
      res.json({
        error: err.message,
      })
    );
});

// Add new Link
router.post('/newlink', (req: Request, res: Response) => {
  addLink(req.body)
    .then((link: JSON) => {
      res.send(link);
    })
    .catch((err: any) =>
      res.json({
        error: err.message,
      })
    );
});

// Delete Link
router.post('/deletelink/:id', (req: Request, res: Response) => {
  deleteLink(req.params.id)
    .then((link: JSON) => {
      res.send(link);
    })
    .catch((err: any) =>
      res.json({
        error: err.message,
      })
    );
});

// Delete ALL Links
router.post('/resetLinks/:id', (req: Request, res: Response) => {
  resetLinks(req.params.id)
    .then((link: JSON) => {
      res.send(link);
    })
    .catch((err: any) =>
      res.json({
        error: err.message,
      })
    );
});

// Add new user image
router.post('/:id/newimage', (req: Request, res: Response) => {
  updateUserImage(req.body)
    .then((image: JSON) => {
      res.send(image);
    })
    .catch((err: any) =>
      res.json({
        error: err.message,
      })
    );
});

export default router;
