import { Request, Response, NextFunction } from 'express';
import { IService } from '../interfaces/userInterface';
import UserService from '../services/userService';

export default class UserController {
  constructor(private userService: IService) {
    this.userService = userService;
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await this.userService.login(req.body);
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  };
}
