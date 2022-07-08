import { Request, Response, NextFunction } from 'express';
import loginSchema from '../joi/loginSchema';

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    next({ status: 400, message: 'All fields must be filled' });
  }
  next();
};

export default loginValidation;
