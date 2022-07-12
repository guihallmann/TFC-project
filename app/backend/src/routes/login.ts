import { Router } from 'express';
import Repository from '../repository/userRepository';
import UserService from '../services/userService';
import UserController from '../controllers/userController';
import loginValidation from '../middlewares/loginValidation';
import tokenValidation from '../middlewares/tokenValidation';

const router = Router();

const entityFactory = () => {
  const repository = new Repository();
  const service = new UserService(repository);
  const controller = new UserController(service);
  return controller;
};

router.post('/', loginValidation, (req, res, next) => {
  entityFactory().login(req, res, next);
});

router.get('/validate', tokenValidation);

export default router;
