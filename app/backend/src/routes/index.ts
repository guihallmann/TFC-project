import { Router } from 'express';
import UserController from '../controllers/userController';
import LoginValidation from '../middlewares/loginValidation';

const router = Router();
const User = new UserController();

// LOGIN ROUTES

router.post('/login', LoginValidation, User.login);
