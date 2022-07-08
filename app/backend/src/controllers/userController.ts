import { Request, Response, NextFunction } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await this.userService.login(req.body);
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
