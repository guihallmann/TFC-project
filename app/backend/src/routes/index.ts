import { Router } from 'express';
import UserController from '../controllers/userController';
import UserValidation from '../middlewares/userValidation';

const router = Router();
const User = new UserController();

// LOGIN ROUTES

router.post('/login', UserValidation, User.login);
