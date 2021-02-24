import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const UserController = new UserControllert();

router.post("/users", UserController.create);

export { router };
