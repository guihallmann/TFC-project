import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import 'dotenv/config';

const jwtSecret = process.env.JWT_SECRET || 'jwt_secret';

const matchValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const { homeTeam, awayTeam } = req.body;
  try {
    if (!authorization) res.status(401).json({ message: 'Token missing' });
    verify(authorization as string, jwtSecret);
    if (homeTeam === awayTeam) {
      next({ status: 400, message: 'Teams can not be the same' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default matchValidation;
