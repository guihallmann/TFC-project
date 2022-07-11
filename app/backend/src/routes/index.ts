import { Router } from 'express';
import Repository from '../repository/userRepository';
import UserService from '../services/userService';
import UserController from '../controllers/userController';
import LoginValidation from '../middlewares/loginValidation';

const router = Router();

const entityFactory = () => {
  const repository = new Repository();
  const service = new UserService(repository);
  const controller = new UserController(service);
  return controller;
};

// LOGIN ROUTES

router.post('/login', LoginValidation, (req, res, next) => {
  entityFactory().login(req, res, next);
});

export default router;
