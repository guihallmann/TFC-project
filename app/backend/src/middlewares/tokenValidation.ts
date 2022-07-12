import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import 'dotenv/config';

const jwtSecret = process.env.JWT_SECRET || 'jwt_secret';

interface IPayload {
  payload:
  {
    id: string,
    username: string,
    role: string,
    email: string,
    password: string
  }
}

const tokenValidation = (req: Request, res: Response, _next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) res.status(401).json({ message: 'Token missing' });

    const decoded = verify(authorization as string, jwtSecret);

    const { payload: { role } } = decoded as IPayload;

    return res.status(200).json(role);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenValidation;
