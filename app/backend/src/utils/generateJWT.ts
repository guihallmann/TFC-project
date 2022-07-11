import { sign, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/userInterface';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtSecret = 'jwt_secret';

const generateToken = (payload: IUser) => {
  const token = sign({ payload }, jwtSecret, jwtConfig);
  return token;
};

export default generateToken;
