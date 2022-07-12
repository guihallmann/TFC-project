import { sign, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/userInterface';
import 'dotenv/config';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtSecret = process.env.JWT_SECRET || 'jwt_secret';

const generateToken = (payload: IUser) => {
  const token = sign({ payload }, jwtSecret, jwtConfig);
  return token;
};

export default generateToken;
